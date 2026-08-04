import { assertType, it } from "vitest";
import type { UpdateCollectionResponse } from "~/generated/api";

it("updateCollection", () => {
	assertType<UpdateCollectionResponse>({
		result: true,
		item: {
			_id: 73607405,
			title: "updatedCollection",
			description: "",
			slug: "updated-collection",
			user: { $ref: "users", $id: 2067190 },
			creatorRef: { _id: 2067190, name: "miyil99106", email: "" },
			parent: null,
			public: true,
			view: "list",
			count: 0,
			cover: [],
			sort: 0,
			expanded: true,
			lastAction: "2026-08-04T00:50:58.365Z",
			created: "2026-08-04T00:50:58.365Z",
			lastUpdate: "2026-08-04T00:50:58.825Z",
			access: { for: 2067190, level: 4, root: false, draggable: true },
			author: true,
		},
	});
});
