import { assertType, it } from "vitest";
import type { UpdateRaindropsResponse } from "~/generated/api";

it("updateRaindrops", () => {
	assertType<UpdateRaindropsResponse>({
		result: true,
		matched: 1,
		modified: 1,
	});
});
