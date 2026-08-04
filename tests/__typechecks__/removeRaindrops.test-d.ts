import { assertType, it } from "vitest";
import type { RemoveRaindropsResponse } from "~/generated/api";

it("removeRaindrops", () => {
	assertType<RemoveRaindropsResponse>({
		result: true,
		matched: 1,
		modified: 1,
	});
});
