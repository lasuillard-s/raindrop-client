import { it } from "^/tests/_helpers/vitest";
import fs from "node:fs";
import path from "node:path";

it("getRootCollections", async ({
	setupTools,
	client,
	expect,
	generateTypeTest,
	resetData: _,
}) => {
	await setupTools.createCollection();
	await setupTools.createCollection({
		cover: [
			"https://png.pngtree.com/png-vector/20221217/ourmid/pngtree-example-sample-grungy-stamp-vector-png-image_15560590.png",
		],
	});

	const response = await client.collection.getRootCollections();

	generateTypeTest({ type: "GetRootCollectionsResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "items": [
		    {
		      "_id": 71498480,
		      "access": {
		        "draggable": true,
		        "for": 2067190,
		        "level": 4,
		        "root": false,
		      },
		      "author": true,
		      "count": 0,
		      "cover": [],
		      "created": "2026-06-01T06:57:31.442Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "email": "",
		        "name": "miyil99106",
		      },
		      "description": "",
		      "expanded": true,
		      "lastAction": "2026-06-01T06:57:31.441Z",
		      "lastUpdate": "2026-06-01T06:57:31.442Z",
		      "parent": null,
		      "public": false,
		      "slug": "get-root-collections",
		      "sort": 0,
		      "title": "getRootCollections",
		      "user": {
		        "$id": 2067190,
		        "$ref": "users",
		      },
		      "view": "list",
		    },
		    {
		      "_id": 71498481,
		      "access": {
		        "draggable": true,
		        "for": 2067190,
		        "level": 4,
		        "root": false,
		      },
		      "author": true,
		      "count": 0,
		      "cover": [],
		      "created": "2026-06-01T06:57:31.857Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "email": "",
		        "name": "miyil99106",
		      },
		      "description": "",
		      "expanded": true,
		      "lastAction": "2026-06-01T06:57:31.856Z",
		      "lastUpdate": "2026-06-01T06:57:31.857Z",
		      "parent": null,
		      "public": false,
		      "slug": "get-root-collections",
		      "sort": 0,
		      "title": "getRootCollections",
		      "user": {
		        "$id": 2067190,
		        "$ref": "users",
		      },
		      "view": "list",
		    },
		  ],
		  "result": true,
		}
	`);
});

it("reorderAllCollections", async ({ client, expect, generateTypeTest }) => {
	const response = await client.collection.reorderAllCollections();

	generateTypeTest({ type: "SimpleResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "result": true,
		}
	`);
});

it("removeCollections", async ({
	setupTools,
	client,
	expect,
	generateTypeTest,
}) => {
	const collection = await setupTools.createCollection();

	const response = await client.collection.removeCollections({
		ids: [collection.item._id],
	});

	generateTypeTest({ type: "RemoveCollectionsResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "ids": [
		    71498482,
		  ],
		  "modified": 1,
		  "result": true,
		}
	`);
});

it("getChildCollections", async ({
	setupTools,
	client,
	expect,
	generateTypeTest,
	resetData: _,
}) => {
	const parent = await setupTools.createCollection();
	await setupTools.createCollection({
		parent: {
			$ref: "collections",
			$id: parent.item._id,
			oid: 0,
		},
	});

	const response = await client.collection.getChildCollections();

	generateTypeTest({ type: "GetChildCollectionsResponse" });
	expect(response.data.items.length).toBe(2);
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "items": [
		    {
		      "_id": 71498484,
		      "access": {
		        "draggable": true,
		        "for": 2067190,
		        "level": 4,
		        "root": false,
		      },
		      "author": true,
		      "count": 0,
		      "cover": [],
		      "created": "2026-06-01T06:57:37.203Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "email": "",
		        "name": "miyil99106",
		      },
		      "description": "",
		      "expanded": true,
		      "lastAction": "2026-06-01T06:57:37.203Z",
		      "lastUpdate": "2026-06-01T06:57:37.203Z",
		      "parent": null,
		      "public": false,
		      "slug": "get-child-collections",
		      "sort": 0,
		      "title": "getChildCollections",
		      "user": {
		        "$id": 2067190,
		        "$ref": "users",
		      },
		      "view": "list",
		    },
		    {
		      "_id": 71498485,
		      "access": {
		        "draggable": true,
		        "for": 2067190,
		        "level": 4,
		        "root": false,
		      },
		      "author": true,
		      "count": 0,
		      "cover": [],
		      "created": "2026-06-01T06:57:37.625Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "email": "",
		        "name": "miyil99106",
		      },
		      "description": "",
		      "expanded": true,
		      "lastAction": "2026-06-01T06:57:37.625Z",
		      "lastUpdate": "2026-06-01T06:57:37.625Z",
		      "parent": {
		        "$id": 71498484,
		        "$ref": "collections",
		      },
		      "public": false,
		      "slug": "get-child-collections",
		      "sort": 0,
		      "title": "getChildCollections",
		      "user": {
		        "$id": 2067190,
		        "$ref": "users",
		      },
		      "view": "list",
		    },
		  ],
		  "result": true,
		}
	`);
});

it("getCollection", async ({
	setupTools,
	client,
	expect,
	generateTypeTest,
}) => {
	const collection = await setupTools.createCollection();

	const response = await client.collection.getCollection(collection.item._id);

	generateTypeTest({ type: "GetCollectionResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "item": {
		    "_id": 71498486,
		    "access": {
		      "draggable": true,
		      "for": 2067190,
		      "level": 4,
		      "root": false,
		    },
		    "author": true,
		    "count": 0,
		    "cover": [],
		    "created": "2026-06-01T06:57:38.482Z",
		    "creatorRef": {
		      "_id": 2067190,
		      "email": "",
		      "name": "miyil99106",
		    },
		    "description": "",
		    "expanded": true,
		    "lastAction": "2026-06-01T06:57:38.481Z",
		    "lastUpdate": "2026-06-01T06:57:38.482Z",
		    "parent": null,
		    "public": false,
		    "slug": "get-collection",
		    "sort": 0,
		    "title": "getCollection",
		    "user": {
		      "$id": 2067190,
		      "$ref": "users",
		    },
		    "view": "list",
		  },
		  "result": true,
		}
	`);
});

it("updateCollection", async ({
	setupTools,
	client,
	expect,
	generateTypeTest,
}) => {
	const collection = await setupTools.createCollection();

	const response = await client.collection.updateCollection(
		collection.item._id,
		{
			title: "updatedCollection",
			cover: [],
			view: "list",
			sort: 0,
			public: true,
			expanded: true,
		},
	);

	generateTypeTest({ type: "UpdateCollectionResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "item": {
		    "_id": 71498487,
		    "access": {
		      "draggable": true,
		      "for": 2067190,
		      "level": 4,
		      "root": false,
		    },
		    "author": true,
		    "count": 0,
		    "cover": [],
		    "created": "2026-06-01T06:57:39.231Z",
		    "creatorRef": {
		      "_id": 2067190,
		      "email": "",
		      "name": "miyil99106",
		    },
		    "description": "",
		    "expanded": true,
		    "lastAction": "2026-06-01T06:57:39.231Z",
		    "lastUpdate": "2026-06-01T06:57:39.685Z",
		    "parent": null,
		    "public": true,
		    "slug": "updated-collection",
		    "sort": 0,
		    "title": "updatedCollection",
		    "user": {
		      "$id": 2067190,
		      "$ref": "users",
		    },
		    "view": "list",
		  },
		  "result": true,
		}
	`);
});

it("removeCollection", async ({
	setupTools,
	client,
	expect,
	generateTypeTest,
}) => {
	const collection = await setupTools.createCollection();

	const response = await client.collection.removeCollection(
		collection.item._id,
	);

	generateTypeTest({ type: "SimpleResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "result": true,
		}
	`);
});

it("createCollection", async ({ client, expect, generateTypeTest }) => {
	const response = await client.collection.createCollection({
		view: "list",
		title: "createCollectionTest",
		sort: 0,
		public: true,
		cover: [],
	});

	generateTypeTest({ type: "CreateCollectionResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "item": {
		    "__v": 0,
		    "_id": 71498489,
		    "access": {
		      "draggable": true,
		      "for": 2067190,
		      "level": 4,
		      "root": false,
		    },
		    "author": true,
		    "count": 0,
		    "cover": [],
		    "created": "2026-06-01T06:57:40.824Z",
		    "creatorRef": {
		      "_id": 2067190,
		      "email": "",
		      "name": "miyil99106",
		    },
		    "description": "",
		    "expanded": true,
		    "lastAction": "2026-06-01T06:57:40.824Z",
		    "lastUpdate": "2026-06-01T06:57:40.824Z",
		    "parent": null,
		    "public": false,
		    "slug": "create-collection-test",
		    "sort": 0,
		    "title": "createCollectionTest",
		    "user": {
		      "$id": 2067190,
		      "$ref": "users",
		    },
		    "view": "list",
		  },
		  "result": true,
		}
	`);
});

it("uploadCollectionCover", async ({
	setupTools,
	client,
	expect,
	generateTypeTest,
}) => {
	const collection = await setupTools.createCollection();
	const coverBlob = await fs.openAsBlob(path.join(__dirname, "./cover.png"));
	const cover = new File([coverBlob], "cover.png", { type: "image/png" });

	const response = await client.collection.uploadCollectionCover(
		collection.item._id,
		cover,
		{
			headers: {
				"Content-Type": "multipart/form-data; boundary=0000000000",
			},
		},
	);

	generateTypeTest({ type: "UploadCollectionCoverResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "item": {
		    "__v": 1,
		    "_id": 71498490,
		    "access": {
		      "draggable": true,
		      "for": 2067190,
		      "level": 4,
		      "root": false,
		    },
		    "author": true,
		    "count": 0,
		    "cover": [
		      "https://up.raindrop.io/collection/thumbs/714/984/90/1780297061755.png",
		    ],
		    "created": "2026-06-01T06:57:41.240Z",
		    "creatorRef": {
		      "_id": 2067190,
		      "email": "",
		      "name": "miyil99106",
		    },
		    "description": "",
		    "expanded": true,
		    "lastAction": "2026-06-01T06:57:41.240Z",
		    "lastUpdate": "2026-06-01T06:57:42.657Z",
		    "parent": null,
		    "public": false,
		    "slug": "upload-collection-cover",
		    "sort": 0,
		    "title": "uploadCollectionCover",
		    "user": {
		      "$id": 2067190,
		      "$ref": "users",
		    },
		    "view": "list",
		  },
		  "result": true,
		}
	`);
});

it("mergeCollections", async ({
	setupTools,
	client,
	expect,
	generateTypeTest,
}) => {
	const one = await setupTools.createCollection();
	const two = await setupTools.createCollection();
	const three = await setupTools.createCollection();

	const response = await client.collection.mergeCollections({
		ids: [one.item._id, two.item._id],
		to: three.item._id,
	});

	generateTypeTest({ type: "MergeCollectionsResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "ids": [
		    71498492,
		    71498493,
		  ],
		  "modified": 2,
		  "result": true,
		}
	`);
});

it("removeAllEmptyCollections", async ({
	client,
	expect,
	generateTypeTest,
}) => {
	const response = await client.collection.removeAllEmptyCollections();

	generateTypeTest({ type: "RemoveAllEmptyCollectionsResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "count": 7,
		  "result": true,
		}
	`);
});

it("emptyTrash", async ({ client, expect, generateTypeTest }) => {
	const response = await client.collection.emptyTrash();

	generateTypeTest({ type: "SimpleResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "result": true,
		}
	`);
});

it("getSystemCollectionStats", async ({ client, expect, generateTypeTest }) => {
	const response = await client.collection.getSystemCollectionStats();

	generateTypeTest({ type: "GetSystemCollectionStatsResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "items": [
		    {
		      "_id": 0,
		      "count": 0,
		    },
		    {
		      "_id": -1,
		      "count": 0,
		    },
		    {
		      "_id": -99,
		      "count": 0,
		    },
		  ],
		  "meta": {
		    "_id": 2067190,
		    "changedBookmarksDate": "2026-06-01T06:57:45.488Z",
		    "pro": false,
		  },
		  "result": true,
		}
	`);
});

it.skip("getCollaborators");

it("shareCollection", async ({
	setupTools,
	client,
	expect,
	generateTypeTest,
}) => {
	const collection = await setupTools.createCollection();

	const response = await client.collection.shareCollection(
		collection.item._id,
		{
			emails: ["example@example.com"],
			role: "viewer",
		},
	);

	generateTypeTest({ type: "ShareCollectionResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "link": "https://app.raindrop.io/join/2c52a2c7-0e84-4b35-a926-21ecd63ec805",
		  "result": true,
		  "token": "<REDACTED>",
		}
	`);
});

it.skip("unshareOrLeaveCollection");
it.skip("changeCollaboratorAccessLevel");
it.skip("deleteCollaborator");
it.skip("acceptInvitation");

it("searchCovers", async ({ client, expect, generateTypeTest }) => {
	const response = await client.collection.searchCovers("strawberry");

	generateTypeTest({ type: "SearchCoversResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "items": [
		    {
		      "icons": [
		        {
		          "png": "https://api.raindrop.io/icon-finder/pack/fxemoji-emojis/400795-256.png",
		        },
		        {
		          "png": "https://api.raindrop.io/icon-finder/pack/twemoji-emojis/407533-256.png",
		        },
		        {
		          "png": "https://api.raindrop.io/icon-finder/pack/fruits-and-vegetables-tiny/474529-256.png",
		        },
		        {
		          "png": "https://api.raindrop.io/icon-finder/pack/things/strawberry-256.png",
		        },
		        {
		          "png": "https://api.raindrop.io/icon-finder/pack/icons8-color/18041-256.png",
		        },
		      ],
		      "title": "Icons",
		    },
		  ],
		  "result": true,
		}
	`);
});

it("getFeaturedCovers", async ({ client, expect, generateTypeTest }) => {
	const response = await client.collection.getFeaturedCovers();

	generateTypeTest({ type: "GetFeaturedCoversResponse" });
	expect(response.data).toMatchSnapshot(); // Response is too large
});
