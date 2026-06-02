import { assertType, it } from "vitest";
import type { GetRootCollectionsResponse } from "~/generated/api";

it("getRootCollections", () => {
	assertType<GetRootCollectionsResponse>({
		result: true,
		items: [
			{
				_id: 71498480,
				title: "getRootCollections",
				description: "",
				user: { $ref: "users", $id: 2067190 },
				public: false,
				view: "list",
				count: 0,
				cover: [],
				sort: 0,
				expanded: true,
				creatorRef: { _id: 2067190, name: "miyil99106", email: "" },
				lastAction: "2026-06-01T06:57:31.441Z",
				created: "2026-06-01T06:57:31.442Z",
				lastUpdate: "2026-06-01T06:57:31.442Z",
				parent: null,
				slug: "get-root-collections",
				access: { for: 2067190, level: 4, root: false, draggable: true },
				author: true,
			},
			{
				_id: 71498481,
				title: "getRootCollections",
				description: "",
				user: { $ref: "users", $id: 2067190 },
				public: false,
				view: "list",
				count: 0,
				cover: [],
				sort: 0,
				expanded: true,
				creatorRef: { _id: 2067190, name: "miyil99106", email: "" },
				lastAction: "2026-06-01T06:57:31.856Z",
				created: "2026-06-01T06:57:31.857Z",
				lastUpdate: "2026-06-01T06:57:31.857Z",
				parent: null,
				slug: "get-root-collections",
				access: { for: 2067190, level: 4, root: false, draggable: true },
				author: true,
			},
		],
	});
});
