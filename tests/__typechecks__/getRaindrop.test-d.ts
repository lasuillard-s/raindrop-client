import { assertType, it } from "vitest";
import type { GetRaindropResponse } from "~/generated/api";

it("getRaindrop", () => {
	assertType<GetRaindropResponse>({
		result: true,
		item: {
			_id: 1740426126,
			link: "https://raindrop.io",
			title: "getRaindrop",
			excerpt: "",
			note: "",
			type: "link",
			user: { $ref: "users", $id: 2067190 },
			cover:
				"https://t3.ftcdn.net/jpg/00/92/53/56/360_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg",
			media: [
				{
					link: "https://t3.ftcdn.net/jpg/00/92/53/56/360_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg",
					type: "image",
				},
			],
			tags: ["getRaindrop"],
			removed: false,
			highlights: [
				{
					text: "ignore",
					note: "",
					created: "2026-06-01T06:57:54.184Z",
					lastUpdate: "2026-06-01T06:57:54.185Z",
					creatorRef: {
						_id: 2067190,
						name: "miyil99106",
						avatar: "",
						email: "",
					},
					_id: "6a1d2d728ab4d18ed44bbd94",
				},
			],
			created: "2026-06-01T06:57:54.184Z",
			lastUpdate: "2026-06-01T06:57:54.184Z",
			domain: "raindrop.io",
			collection: { $ref: "collections", $id: -1, oid: -1 },
			creatorRef: { _id: 2067190, name: "miyil99106", avatar: "", email: "" },
			sort: 1740426126,
			collectionId: -1,
		},
		author: true,
	});
});
