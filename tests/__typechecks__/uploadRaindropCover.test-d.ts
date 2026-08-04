import { assertType, it } from "vitest";
import type { UploadRaindropCoverResponse } from "~/generated/api";

it("uploadRaindropCover", () => {
	assertType<UploadRaindropCoverResponse>({
		result: true,
		item: {
			_id: 1809459481,
			link: "https://raindrop.io",
			domain: "raindrop.io",
			title: "uploadRaindropCover",
			excerpt: "",
			note: "",
			type: "link",
			user: { $ref: "users", $id: 2067190 },
			creatorRef: { _id: 2067190, name: "miyil99106", avatar: "", email: "" },
			cover:
				"https://up.raindrop.io/raindrop/thumbs/180/945/948/1/1785804635872.png",
			media: [
				{
					link: "https://up.raindrop.io/raindrop/thumbs/180/945/948/1/1785804635872.png",
					type: "image",
				},
			],
			tags: [],
			removed: false,
			sort: 1809459481,
			created: "2026-08-04T00:50:35.337Z",
			lastUpdate: "2026-08-04T00:50:36.305Z",
			collection: { $ref: "collections", $id: -1, oid: -1 },
			__v: 1,
			collectionId: -1,
		},
	});
});
