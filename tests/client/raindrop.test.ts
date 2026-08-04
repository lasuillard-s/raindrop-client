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
			    "_id": 1809460539,
			    "collection": {
			      "$id": 73607430,
			      "$ref": "collections",
			      "oid": 73607430,
			    },
			    "collectionId": 73607430,
			    "cover": "",
			    "created": "2026-08-04T00:51:46.792Z",
			    "creatorRef": {
			      "_id": 2067190,
			      "avatar": "",
			      "email": "",
			      "name": "miyil99106",
			    },
			    "domain": "raindrop.io",
			    "excerpt": "",
			    "highlights": [],
			    "lastUpdate": "2026-08-04T00:51:46.792Z",
			    "link": "https://raindrop.io",
			    "media": [],
			    "note": "",
			    "removed": false,
			    "sort": 1809460539,
			    "tags": [],
			    "title": "fetch full pagination results",
			    "type": "link",
			    "user": {
			      "$id": 2067190,
			      "$ref": "users",
			    },
			  },
			  {
			    "_id": 1809460537,
			    "collection": {
			      "$id": 73607430,
			      "$ref": "collections",
			      "oid": 73607430,
			    },
			    "collectionId": 73607430,
			    "cover": "",
			    "created": "2026-08-04T00:51:46.379Z",
			    "creatorRef": {
			      "_id": 2067190,
			      "avatar": "",
			      "email": "",
			      "name": "miyil99106",
			    },
			    "domain": "raindrop.io",
			    "excerpt": "",
			    "highlights": [],
			    "lastUpdate": "2026-08-04T00:51:46.379Z",
			    "link": "https://raindrop.io",
			    "media": [],
			    "note": "",
			    "removed": false,
			    "sort": 1809460537,
			    "tags": [],
			    "title": "fetch full pagination results",
			    "type": "link",
			    "user": {
			      "$id": 2067190,
			      "$ref": "users",
			    },
			  },
			  {
			    "_id": 1809460535,
			    "collection": {
			      "$id": 73607430,
			      "$ref": "collections",
			      "oid": 73607430,
			    },
			    "collectionId": 73607430,
			    "cover": "",
			    "created": "2026-08-04T00:51:45.975Z",
			    "creatorRef": {
			      "_id": 2067190,
			      "avatar": "",
			      "email": "",
			      "name": "miyil99106",
			    },
			    "domain": "raindrop.io",
			    "excerpt": "",
			    "highlights": [],
			    "lastUpdate": "2026-08-04T00:51:45.975Z",
			    "link": "https://raindrop.io",
			    "media": [],
			    "note": "",
			    "removed": false,
			    "sort": 1809460535,
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
