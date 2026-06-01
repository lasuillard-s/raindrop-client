import { assertType, it } from "vitest";
import type { CreateRaindropResponse } from "~/generated/api";

it("createRaindrop", () => {
	assertType<CreateRaindropResponse>({
		result: true,
		item: {
			link: "https://raindrop.io",
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
			tags: ["createRaindrop"],
			removed: false,
			created: "2026-06-01T06:57:53.797Z",
			lastUpdate: "2026-06-01T06:57:53.797Z",
			domain: "raindrop.io",
			title: "https://raindrop.io",
			collection: { $ref: "collections", $id: -1, oid: -1 },
			_id: 1740426124,
			creatorRef: { _id: 2067190, name: "miyil99106", avatar: "", email: "" },
			sort: 1740426124,
			__v: 0,
			collectionId: -1,
		},
	});
});
