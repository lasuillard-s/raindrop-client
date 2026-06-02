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
				_id: "6a1d2d828e39dc469704b1e0",
				text: "ignore",
				note: "",
				created: "2026-06-01T06:58:10.596Z",
				raindropRef: 1740426258,
			},
		],
		count: 1,
	});
});
