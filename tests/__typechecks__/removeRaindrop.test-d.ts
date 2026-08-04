import { assertType, it } from "vitest";
import type { RemoveRaindropResponse } from "~/generated/api";

it("removeRaindrop", () => {
	assertType<RemoveRaindropResponse>({
		result: true,
		item: {
			_id: 1809459473,
			link: "https://raindrop.io",
			title: "removeRaindrop",
			excerpt: "",
			note: "",
			type: "link",
			user: { $ref: "users", $id: 2067190 },
			cover: "",
			tags: [],
			removed: true,
			media: [],
			created: "2026-08-04T00:50:33.597Z",
			lastUpdate: "2026-08-04T00:50:33.992Z",
			domain: "raindrop.io",
			collection: { $ref: "collections", $id: -99, oid: -99 },
			creatorRef: { _id: 2067190, name: "miyil99106", avatar: "", email: "" },
			sort: 1809459473,
			collectionId: -99,
			order: 0,
		},
	});
});
