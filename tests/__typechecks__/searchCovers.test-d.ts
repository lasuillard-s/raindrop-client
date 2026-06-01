import { assertType, it } from "vitest";
import type { SearchCoversResponse } from "~/generated/api";

it("searchCovers", () => {
	assertType<SearchCoversResponse>({
		result: true,
		items: [
			{
				title: "Icons",
				icons: [
					{
						png: "https://api.raindrop.io/icon-finder/pack/fxemoji-emojis/400795-256.png",
					},
					{
						png: "https://api.raindrop.io/icon-finder/pack/twemoji-emojis/407533-256.png",
					},
					{
						png: "https://api.raindrop.io/icon-finder/pack/fruits-and-vegetables-tiny/474529-256.png",
					},
					{
						png: "https://api.raindrop.io/icon-finder/pack/things/strawberry-256.png",
					},
					{
						png: "https://api.raindrop.io/icon-finder/pack/icons8-color/18041-256.png",
					},
				],
			},
		],
	});
});
