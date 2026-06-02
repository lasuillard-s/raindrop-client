import { assertType, it } from "vitest";
import type { UploadFileResponse } from "~/generated/api";

it("uploadFile", () => {
	assertType<UploadFileResponse>({
		result: true,
		item: {
			_id: 1740426138,
			link: "https://api.raindrop.io/v2/raindrop/1740426138/file?type=image/png",
			domain: "up.raindrop.io",
			title: "cover.png",
			excerpt: "",
			note: "",
			type: "image",
			user: { $ref: "users", $id: 2067190 },
			creatorRef: { _id: 2067190, name: "miyil99106", avatar: "", email: "" },
			cover:
				"https://rdl.ink/render/https%3A%2F%2Fup.raindrop.io%2Fraindrop%2Ffiles%2F174%2F042%2F613%2F8%2Fcover.png",
			media: [],
			tags: [],
			file: { name: "cover.png", size: 111258, type: "image/png" },
			removed: false,
			sort: 1740426138,
			created: "2026-06-01T06:57:56.356Z",
			lastUpdate: "2026-06-01T06:57:56.633Z",
			__v: 0,
			collection: { $ref: "collections", $id: -1, oid: -1 },
			collectionId: -1,
		},
	});
});
