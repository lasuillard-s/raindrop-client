import { assertType, it } from "vitest";
import type { UploadCollectionCoverResponse } from "~/generated/api";

it("uploadCollectionCover", () => {
	assertType<UploadCollectionCoverResponse>({
		result: true,
		item: {
			_id: 71498490,
			title: "uploadCollectionCover",
			description: "",
			slug: "upload-collection-cover",
			user: { $ref: "users", $id: 2067190 },
			creatorRef: { _id: 2067190, name: "miyil99106", email: "" },
			parent: null,
			public: false,
			view: "list",
			count: 0,
			cover: [
				"https://up.raindrop.io/collection/thumbs/714/984/90/1780297061755.png",
			],
			sort: 0,
			expanded: true,
			lastAction: "2026-06-01T06:57:41.240Z",
			created: "2026-06-01T06:57:41.240Z",
			lastUpdate: "2026-06-01T06:57:42.657Z",
			__v: 1,
			access: { for: 2067190, level: 4, root: false, draggable: true },
			author: true,
		},
	});
});
