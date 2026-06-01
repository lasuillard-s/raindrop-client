import { assertType, it } from "vitest";
import type { CreateRaindropsResponse } from "~/generated/api";

it("createRaindrops", () => {
	assertType<CreateRaindropsResponse>({
		result: true,
		items: [
			{
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
				tags: ["createRaindrops"],
				removed: false,
				collection: { $ref: "collections", $id: -1, oid: -1 },
				highlights: [],
				_id: 1740426176,
				created: "2026-06-01T06:58:02.485Z",
				lastUpdate: "2026-06-01T06:58:02.485Z",
				domain: "raindrop.io",
				title: "https://raindrop.io",
				creatorRef: 2067190,
				sort: 1740426176,
				__v: 0,
				collectionId: -1,
			},
		],
	});
});
