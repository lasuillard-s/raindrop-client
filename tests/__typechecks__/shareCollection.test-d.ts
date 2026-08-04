import { assertType, it } from "vitest";
import type { ShareCollectionResponse } from "~/generated/api";

it("shareCollection", () => {
	assertType<ShareCollectionResponse>({
		result: true,
		token: "<REDACTED>",
		link: "https://app.raindrop.io/join/ca79c323-4d00-45ca-a84e-f509ce413242",
	});
});
