import { assertType, it } from "vitest";
import type { UploadRaindropCoverResponse } from "~/generated/api";

it("uploadRaindropCover", () => {
	assertType<UploadRaindropCoverResponse>({
		result: true,
		item: {
			_id: 1740426142,
			link: "https://raindrop.io",
			domain: "raindrop.io",
			title: "uploadRaindropCover",
			excerpt: "",
			note: "",
			type: "link",
			user: { $ref: "users", $id: 2067190 },
			creatorRef: { _id: 2067190, name: "miyil99106", avatar: "", email: "" },
			cover:
				"https://up.raindrop.io/raindrop/thumbs/174/042/614/2/1780297077431.png",
			media: [
				{
					link: "https://up.raindrop.io/raindrop/thumbs/174/042/614/2/1780297077431.png",
					type: "image",
				},
			],
			tags: [],
			removed: false,
			sort: 1740426142,
			created: "2026-06-01T06:57:57.007Z",
			lastUpdate: "2026-06-01T06:57:57.834Z",
			collection: { $ref: "collections", $id: -1, oid: -1 },
			__v: 1,
			collectionId: -1,
		},
	});
});
