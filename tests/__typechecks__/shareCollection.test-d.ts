import { assertType, it } from "vitest";
import type { ShareCollectionResponse } from "~/generated/api";

it("shareCollection", () => {
	assertType<ShareCollectionResponse>({
		result: true,
		token: "<REDACTED>",
		link: "https://app.raindrop.io/join/2c52a2c7-0e84-4b35-a926-21ecd63ec805",
	});
});
