import { assertType, it } from "vitest";
import type { UploadFileResponse } from "~/generated/api";

it("uploadFile", () => {
	assertType<UploadFileResponse>({
		result: true,
		item: {
			_id: 1809459476,
			link: "https://api.raindrop.io/v2/raindrop/1809459476/file?type=image/png",
			domain: "up.raindrop.io",
			title: "cover.png",
			excerpt: "",
			note: "",
			type: "image",
			user: { $ref: "users", $id: 2067190 },
			creatorRef: { _id: 2067190, name: "miyil99106", avatar: "", email: "" },
			cover:
				"https://rdl.ink/render/https%3A%2F%2Fup.raindrop.io%2Fraindrop%2Ffiles%2F180%2F945%2F947%2F6%2Fcover.png",
			media: [],
			tags: [],
			file: { name: "cover.png", size: 111258, type: "image/png" },
			removed: false,
			sort: 1809459476,
			created: "2026-08-04T00:50:34.485Z",
			lastUpdate: "2026-08-04T00:50:34.897Z",
			__v: 0,
			collection: { $ref: "collections", $id: -1, oid: -1 },
			collectionId: -1,
		},
	});
});
