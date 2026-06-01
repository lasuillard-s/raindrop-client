import { assertType, it } from "vitest";
import type { CheckURLsExistResponse } from "~/generated/api";

it("checkURLsExist", () => {
	assertType<CheckURLsExistResponse>({
		result: true,
		ids: [1740426332],
		duplicates: [{ link: "https://raindrop.com", _id: 1740426332 }],
		id: 1740426332,
	});
});
