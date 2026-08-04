import { assertType, it } from "vitest";
import type { GetRaindropResponse } from "~/generated/api";

it("getRaindrop", () => {
	assertType<GetRaindropResponse>({
		result: true,
		item: {
			_id: 1809459467,
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
					created: "2026-08-04T00:50:32.018Z",
					lastUpdate: "2026-08-04T00:50:32.018Z",
					creatorRef: {
						_id: 2067190,
						name: "miyil99106",
						avatar: "",
						email: "",
					},
					_id: "6a7137586fae3e83cf626ad3",
				},
			],
			created: "2026-08-04T00:50:32.018Z",
			lastUpdate: "2026-08-04T00:50:32.018Z",
			domain: "raindrop.io",
			collection: { $ref: "collections", $id: -1, oid: -1 },
			creatorRef: { _id: 2067190, name: "miyil99106", avatar: "", email: "" },
			sort: 1809459467,
			collectionId: -1,
		},
		author: true,
	});
});
