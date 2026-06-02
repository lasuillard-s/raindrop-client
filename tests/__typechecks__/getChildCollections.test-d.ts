import { assertType, it } from "vitest";
import type { GetChildCollectionsResponse } from "~/generated/api";

it("getChildCollections", () => {
	assertType<GetChildCollectionsResponse>({
		result: true,
		items: [
			{
				_id: 71498484,
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
				lastAction: "2026-06-01T06:57:37.203Z",
				created: "2026-06-01T06:57:37.203Z",
				lastUpdate: "2026-06-01T06:57:37.203Z",
				parent: null,
				slug: "get-child-collections",
				access: { for: 2067190, level: 4, root: false, draggable: true },
				author: true,
			},
			{
				_id: 71498485,
				title: "getChildCollections",
				description: "",
				user: { $ref: "users", $id: 2067190 },
				parent: { $ref: "collections", $id: 71498484 },
				public: false,
				view: "list",
				count: 0,
				cover: [],
				sort: 0,
				expanded: true,
				creatorRef: { _id: 2067190, name: "miyil99106", email: "" },
				lastAction: "2026-06-01T06:57:37.625Z",
				created: "2026-06-01T06:57:37.625Z",
				lastUpdate: "2026-06-01T06:57:37.625Z",
				slug: "get-child-collections",
				access: { for: 2067190, level: 4, root: false, draggable: true },
				author: true,
			},
		],
	});
});
