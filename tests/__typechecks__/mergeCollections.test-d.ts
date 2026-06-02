import { assertType, it } from "vitest";
import type { MergeCollectionsResponse } from "~/generated/api";

it("mergeCollections", () => {
	assertType<MergeCollectionsResponse>({
		result: true,
		modified: 2,
		ids: [71498492, 71498493],
	});
});
