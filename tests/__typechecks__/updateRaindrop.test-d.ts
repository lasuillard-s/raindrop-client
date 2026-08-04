import { assertType, it } from "vitest";
import type { UpdateRaindropResponse } from "~/generated/api";

it("updateRaindrop", () => {
	assertType<UpdateRaindropResponse>({
		result: true,
		item: {
			_id: 1809459469,
			link: "https://raindrop.io",
			domain: "raindrop.io",
			title: "updateRaindrop",
			excerpt: "updateRaindrop",
			note: "",
			type: "link",
			user: { $ref: "users", $id: 2067190 },
			creatorRef: { _id: 2067190, name: "miyil99106", avatar: "", email: "" },
			cover: "",
			media: [],
			tags: ["updateRaindrop"],
			highlights: [
				{
					text: "ignore",
					note: "",
					created: "2026-08-04T00:50:33.196Z",
					lastUpdate: "2026-08-04T00:50:33.197Z",
					creatorRef: 2067190,
					_id: "6a713759ac9e1cc6f43441fc",
				},
			],
			removed: false,
			sort: 1809459469,
			created: "2026-08-04T00:50:32.797Z",
			lastUpdate: "2026-08-04T00:50:33.196Z",
			collection: { $ref: "collections", $id: -1, oid: -1 },
			__v: 1,
			collectionId: -1,
		},
	});
});
