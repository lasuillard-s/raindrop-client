import { assertType, it } from "vitest";
import type { GetChildCollectionsResponse } from "~/generated/api";

it("getChildCollections", () => {
	assertType<GetChildCollectionsResponse>({
		result: true,
		items: [
			{
				_id: 73607401,
				title: "getChildCollections",
				description: "",
				user: { $ref: "users", $id: 2067190 },
				public: false,
				view: "list",
				count: 0,
				cover: [],
				sort: 0,
				expanded: true,
				creatorRef: { _id: 2067190, name: "miyil99106", email: "" },
				lastAction: "2026-08-04T00:50:56.330Z",
				created: "2026-08-04T00:50:56.331Z",
				lastUpdate: "2026-08-04T00:50:56.331Z",
				parent: null,
				slug: "get-child-collections",
				access: { for: 2067190, level: 4, root: false, draggable: true },
				author: true,
			},
			{
				_id: 73607402,
				title: "getChildCollections",
				description: "",
				user: { $ref: "users", $id: 2067190 },
				parent: { $ref: "collections", $id: 73607401 },
				public: false,
				view: "list",
				count: 0,
				cover: [],
				sort: 0,
				expanded: true,
				creatorRef: { _id: 2067190, name: "miyil99106", email: "" },
				lastAction: "2026-08-04T00:50:56.756Z",
				created: "2026-08-04T00:50:56.756Z",
				lastUpdate: "2026-08-04T00:50:56.756Z",
				slug: "get-child-collections",
				access: { for: 2067190, level: 4, root: false, draggable: true },
				author: true,
			},
		],
	});
});
