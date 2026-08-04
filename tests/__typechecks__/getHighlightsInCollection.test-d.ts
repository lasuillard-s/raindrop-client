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
				_id: "6a71378dac9e1cc6f4344211",
				text: "ignore",
				note: "",
				created: "2026-08-04T00:51:25.301Z",
				raindropRef: 1809459960,
			},
		],
		count: 1,
	});
});
