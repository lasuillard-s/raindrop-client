import { assertType, it } from "vitest";
import type { GetFiltersResponse } from "~/generated/api";

it("getFilters", () => {
	assertType<GetFiltersResponse>({
		result: true,
		tags: [
			{ _id: "getFilters-1", count: 1 },
			{ _id: "getFilters-2", count: 1 },
		],
		types: [{ _id: "link", count: 3 }],
		created: [{ _id: "2026-06", count: 3 }],
		total: { count: 3 },
		notag: { count: 2 },
		important: { count: 1 },
		collectionId: 0,
	});
});
