import { it } from "^/tests/_helpers/vitest";

it("getAllHighlights", async ({
	setupTools,
	client,
	expect,
	generateTypeTest,
	resetData: _,
}) => {
	await setupTools.createRaindrop({
		highlights: [
			{
				text: "ignore",
				note: "",
			},
		],
	});
	const response = await client.highlight.getAllHighlights();

	generateTypeTest({ type: "GetAllHighlightsResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "count": 1,
		  "items": [
		    {
		      "_id": "6a1d2d828e39dc469704b1e0",
		      "created": "2026-06-01T06:58:10.596Z",
		      "link": "https://raindrop.io",
		      "note": "",
		      "raindropRef": 1740426258,
		      "tags": [],
		      "text": "ignore",
		      "title": "getAllHighlights",
		    },
		  ],
		  "result": true,
		}
	`);
});

it("getHighlightsInCollection", async ({
	setupTools,
	client,
	expect,
	generateTypeTest,
}) => {
	const collection = await setupTools.createCollection();
	await setupTools.createRaindrop({
		collection: { $id: collection.item._id },
		highlights: [
			{
				text: "ignore",
				note: "",
			},
		],
	});

	const response = await client.highlight.getHighlightsInCollection(
		collection.item._id,
	);

	generateTypeTest({ type: "GetHighlightsInCollectionResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "count": 1,
		  "items": [
		    {
		      "_id": "6a1d2d835e7011229703661e",
		      "created": "2026-06-01T06:58:11.727Z",
		      "link": "https://raindrop.io",
		      "note": "",
		      "raindropRef": 1740426275,
		      "tags": [],
		      "text": "ignore",
		      "title": "getHighlightsInCollection",
		    },
		  ],
		  "result": true,
		}
	`);
});
