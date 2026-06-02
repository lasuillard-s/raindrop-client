import { assertType, it } from "vitest";
import type { GetTagsInCollectionResponse } from "~/generated/api";

it("getTagsInCollection", () => {
	assertType<GetTagsInCollectionResponse>({
		result: true,
		items: [
			{ _id: "getTagsInCollection-1", count: 1 },
			{ _id: "getTagsInCollection-2", count: 1 },
			{ _id: "getTagsInCollection-3", count: 1 },
		],
	});
});
