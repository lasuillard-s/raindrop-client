import { assertType, it } from "vitest";
import type { GetRootCollectionsResponse } from "~/generated/api";

it("getRootCollections", () => {
	assertType<GetRootCollectionsResponse>({
		result: true,
		items: [
			{
				_id: 73607398,
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
				lastAction: "2026-08-04T00:50:50.616Z",
				created: "2026-08-04T00:50:50.616Z",
				lastUpdate: "2026-08-04T00:50:50.616Z",
				parent: null,
				slug: "get-root-collections",
				access: { for: 2067190, level: 4, root: false, draggable: true },
				author: true,
			},
			{
				_id: 73607399,
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
				lastAction: "2026-08-04T00:50:51.037Z",
				created: "2026-08-04T00:50:51.038Z",
				lastUpdate: "2026-08-04T00:50:51.038Z",
				parent: null,
				slug: "get-root-collections",
				access: { for: 2067190, level: 4, root: false, draggable: true },
				author: true,
			},
		],
	});
});
