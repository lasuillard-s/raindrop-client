import { it } from "^/tests/_helpers/vitest";
import { describe, expect } from "vitest";

// Skip test for deprecated function
describe.skip("raindrop.getAllRaindrops", () => {
	it("fetch full pagination results", async ({ setupTools, client }) => {
		const collection = await setupTools.createCollection();
		const collectionId = collection.item._id;
		await setupTools.createRaindrop({ collection: { $id: collectionId } });
		await setupTools.createRaindrop({ collection: { $id: collectionId } });
		await setupTools.createRaindrop({ collection: { $id: collectionId } });

		const result = await client.raindrop.getAllRaindrops(collectionId, {
			pageSize: 1,
		});
		expect(result.length).toBe(3);
		expect(result).toMatchInlineSnapshot(`
			[
			  {
			    "_id": 1740365702,
			    "collection": {
			      "$id": 71496931,
			      "$ref": "collections",
			      "oid": 71496931,
			    },
			    "collectionId": 71496931,
			    "cover": "",
			    "created": "2026-06-01T05:26:16.502Z",
			    "creatorRef": {
			      "_id": 2067190,
			      "avatar": "",
			      "email": "",
			      "name": "miyil99106",
			    },
			    "domain": "raindrop.io",
			    "excerpt": "",
			    "highlights": [],
			    "lastUpdate": "2026-06-01T05:26:16.502Z",
			    "link": "https://raindrop.io",
			    "media": [],
			    "note": "",
			    "removed": false,
			    "sort": 1740365702,
			    "tags": [],
			    "title": "fetch full pagination results",
			    "type": "link",
			    "user": {
			      "$id": 2067190,
			      "$ref": "users",
			    },
			  },
			  {
			    "_id": 1740365701,
			    "collection": {
			      "$id": 71496931,
			      "$ref": "collections",
			      "oid": 71496931,
			    },
			    "collectionId": 71496931,
			    "cover": "",
			    "created": "2026-06-01T05:26:16.127Z",
			    "creatorRef": {
			      "_id": 2067190,
			      "avatar": "",
			      "email": "",
			      "name": "miyil99106",
			    },
			    "domain": "raindrop.io",
			    "excerpt": "",
			    "highlights": [],
			    "lastUpdate": "2026-06-01T05:26:16.127Z",
			    "link": "https://raindrop.io",
			    "media": [],
			    "note": "",
			    "removed": false,
			    "sort": 1740365701,
			    "tags": [],
			    "title": "fetch full pagination results",
			    "type": "link",
			    "user": {
			      "$id": 2067190,
			      "$ref": "users",
			    },
			  },
			  {
			    "_id": 1740365699,
			    "collection": {
			      "$id": 71496931,
			      "$ref": "collections",
			      "oid": 71496931,
			    },
			    "collectionId": 71496931,
			    "cover": "",
			    "created": "2026-06-01T05:26:15.761Z",
			    "creatorRef": {
			      "_id": 2067190,
			      "avatar": "",
			      "email": "",
			      "name": "miyil99106",
			    },
			    "domain": "raindrop.io",
			    "excerpt": "",
			    "highlights": [],
			    "lastUpdate": "2026-06-01T05:26:15.762Z",
			    "link": "https://raindrop.io",
			    "media": [],
			    "note": "",
			    "removed": false,
			    "sort": 1740365699,
			    "tags": [],
			    "title": "fetch full pagination results",
			    "type": "link",
			    "user": {
			      "$id": 2067190,
			      "$ref": "users",
			    },
			  },
			]
		`);
	});
});
