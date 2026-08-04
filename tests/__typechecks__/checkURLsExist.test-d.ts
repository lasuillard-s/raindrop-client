import { assertType, it } from "vitest";
import type { CheckURLsExistResponse } from "~/generated/api";

it("checkURLsExist", () => {
	assertType<CheckURLsExistResponse>({
		result: true,
		ids: [1809460511],
		duplicates: [{ link: "https://raindrop.com", _id: 1809460511 }],
		id: 1809460511,
	});
});
