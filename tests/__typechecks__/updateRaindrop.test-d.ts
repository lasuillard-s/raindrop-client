import { assertType, it } from "vitest";
import type { UpdateRaindropResponse } from "~/generated/api";

it("updateRaindrop", () => {
	assertType<UpdateRaindropResponse>({
		result: true,
		item: {
			_id: 1740426131,
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
					created: "2026-06-01T06:57:55.203Z",
					lastUpdate: "2026-06-01T06:57:55.204Z",
					creatorRef: 2067190,
					_id: "6a1d2d73832bde5f7efe516e",
				},
			],
			removed: false,
			sort: 1740426131,
			created: "2026-06-01T06:57:54.839Z",
			lastUpdate: "2026-06-01T06:57:55.203Z",
			collection: { $ref: "collections", $id: -1, oid: -1 },
			__v: 1,
			collectionId: -1,
		},
	});
});
