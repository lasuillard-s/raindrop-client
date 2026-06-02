import NodeHTTPAdapter from "@pollyjs/adapter-node-http";
import { Polly } from "@pollyjs/core";
import FSPersister from "@pollyjs/persister-fs";
import type { Task, Use } from "@vitest/runner";
import { taskId } from "./common";

Polly.register(NodeHTTPAdapter);
Polly.register(FSPersister);

export async function polly({ task }: { task: Task }, use: Use<Polly>) {
	const _polly = new Polly(taskId(task), {
		adapters: ["node-http"],
		persister: "fs",
		persisterOptions: {
			fs: {
				recordingsDir: "tests/__recordings__",
			},
		},
		recordFailedRequests: true,
		matchRequestsBy: {
			headers: false,
		},
	});
	_polly.server.any().on("beforePersist", (_, recording) => {
		interface Header {
			name: string;
			value: string;
		}

		// Ignore changing values
		delete recording.startedDateTime;
		delete recording.time;
		delete recording.timings;
		delete recording.request.bodySize;
		delete recording.request.cookies;
		delete recording.request.headersSize;
		delete recording.response.bodySize;
		delete recording.response.content.size;
		delete recording.response.cookies;
		delete recording.response.headersSize;

		// Filter request headers
		const headersToKeep = ["accept", "content-type", "accept-encoding", "host"];
		recording.request.headers = recording.request.headers.filter((h: Header) =>
			headersToKeep.includes(h.name.toLowerCase()),
		);

		// Suppress request mime type randomness
		const requestContentTypeHeader = recording.request.headers["content-type"];
		if (
			requestContentTypeHeader?.value.startsWith(
				"multipart/form-data; boundary=",
			)
		) {
			recording.request.headers["content-type"].value =
				"multipart/form-data; boundary=0000000000";
		}
		const postData = recording.request.postData;
		if (postData) {
			if (postData.mimeType.startsWith("multipart/form-data; boundary=")) {
				recording.request.postData.mimeType =
					"multipart/form-data; boundary=0000000000";
			}
		}

		// Filter response headers
		const responseHeadersToKeep = ["content-type", "content-encoding"];
		recording.response.headers = recording.response.headers.filter(
			(h: Header) => responseHeadersToKeep.includes(h.name.toLowerCase()),
		);
	});
	await use(_polly);
	await _polly.stop();
}
