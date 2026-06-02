import { it } from "^/tests/_helpers/vitest";
import { describe, expect } from "vitest";

// Skip test for deprecated function
describe("raindrop.getAllRaindrops", () => {
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
			    "_id": 1741746640,
			    "collection": {
			      "$id": 71535757,
			      "$ref": "collections",
			      "oid": 71535757,
			    },
			    "collectionId": 71535757,
			    "cover": "",
			    "created": "2026-06-02T04:44:15.936Z",
			    "creatorRef": {
			      "_id": 2067190,
			      "avatar": "",
			      "email": "",
			      "name": "miyil99106",
			    },
			    "domain": "raindrop.io",
			    "excerpt": "",
			    "highlights": [],
			    "lastUpdate": "2026-06-02T04:44:15.936Z",
			    "link": "https://raindrop.io",
			    "media": [],
			    "note": "",
			    "removed": false,
			    "sort": 1741746640,
			    "tags": [],
			    "title": "fetch full pagination results",
			    "type": "link",
			    "user": {
			      "$id": 2067190,
			      "$ref": "users",
			    },
			  },
			  {
			    "_id": 1741746638,
			    "collection": {
			      "$id": 71535757,
			      "$ref": "collections",
			      "oid": 71535757,
			    },
			    "collectionId": 71535757,
			    "cover": "",
			    "created": "2026-06-02T04:44:15.564Z",
			    "creatorRef": {
			      "_id": 2067190,
			      "avatar": "",
			      "email": "",
			      "name": "miyil99106",
			    },
			    "domain": "raindrop.io",
			    "excerpt": "",
			    "highlights": [],
			    "lastUpdate": "2026-06-02T04:44:15.564Z",
			    "link": "https://raindrop.io",
			    "media": [],
			    "note": "",
			    "removed": false,
			    "sort": 1741746638,
			    "tags": [],
			    "title": "fetch full pagination results",
			    "type": "link",
			    "user": {
			      "$id": 2067190,
			      "$ref": "users",
			    },
			  },
			  {
			    "_id": 1741746637,
			    "collection": {
			      "$id": 71535757,
			      "$ref": "collections",
			      "oid": 71535757,
			    },
			    "collectionId": 71535757,
			    "cover": "",
			    "created": "2026-06-02T04:44:15.184Z",
			    "creatorRef": {
			      "_id": 2067190,
			      "avatar": "",
			      "email": "",
			      "name": "miyil99106",
			    },
			    "domain": "raindrop.io",
			    "excerpt": "",
			    "highlights": [],
			    "lastUpdate": "2026-06-02T04:44:15.184Z",
			    "link": "https://raindrop.io",
			    "media": [],
			    "note": "",
			    "removed": false,
			    "sort": 1741746637,
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
