import { assertType, it } from "vitest";
import type { GetHighlightsInCollectionResponse } from "~/generated/api";

it("getHighlightsInCollection", () => {
	assertType<GetHighlightsInCollectionResponse>({
		result: true,
		items: [
			{
				link: "https://raindrop.io",
				title: "getHighlightsInCollection",
				tags: [],
				_id: "6a1d2d835e7011229703661e",
				text: "ignore",
				note: "",
				created: "2026-06-01T06:58:11.727Z",
				raindropRef: 1740426275,
			},
		],
		count: 1,
	});
});
