import { assertType, it } from "vitest";
import type { UploadCollectionCoverResponse } from "~/generated/api";

it("uploadCollectionCover", () => {
	assertType<UploadCollectionCoverResponse>({
		result: true,
		item: {
			_id: 73607409,
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
				"https://up.raindrop.io/collection/thumbs/736/074/09/1785804661102.png",
			],
			sort: 0,
			expanded: true,
			lastAction: "2026-08-04T00:51:00.527Z",
			created: "2026-08-04T00:51:00.527Z",
			lastUpdate: "2026-08-04T00:51:01.540Z",
			__v: 1,
			access: { for: 2067190, level: 4, root: false, draggable: true },
			author: true,
		},
	});
});
