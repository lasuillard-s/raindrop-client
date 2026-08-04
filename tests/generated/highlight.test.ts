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
		      "_id": "6a71378c6fae3e83cf626adc",
		      "created": "2026-08-04T00:51:24.097Z",
		      "link": "https://raindrop.io",
		      "note": "",
		      "raindropRef": 1809459646,
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
		      "_id": "6a71378dac9e1cc6f4344211",
		      "created": "2026-08-04T00:51:25.301Z",
		      "link": "https://raindrop.io",
		      "note": "",
		      "raindropRef": 1809459960,
		      "tags": [],
		      "text": "ignore",
		      "title": "getHighlightsInCollection",
		    },
		  ],
		  "result": true,
		}
	`);
});
