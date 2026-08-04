import { assertType, it } from "vitest";
import type { GetAllHighlightsResponse } from "~/generated/api";

it("getAllHighlights", () => {
	assertType<GetAllHighlightsResponse>({
		result: true,
		items: [
			{
				link: "https://raindrop.io",
				title: "getAllHighlights",
				tags: [],
				_id: "6a71378c6fae3e83cf626adc",
				text: "ignore",
				note: "",
				created: "2026-08-04T00:51:24.097Z",
				raindropRef: 1809459646,
			},
		],
		count: 1,
	});
});
