import { it } from "^/tests/_helpers/vitest";
import fs from "node:fs";
import path from "node:path";

it("createRaindrop", async ({ client, expect, generateTypeTest }) => {
	const response = await client.raindrop.createRaindrop({
		link: "https://raindrop.io",
		media: [
			{
				link: "https://t3.ftcdn.net/jpg/00/92/53/56/360_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg",
			},
		],
		tags: ["createRaindrop"],
	});

	generateTypeTest({ type: "CreateRaindropResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "item": {
		    "__v": 0,
		    "_id": 1740426124,
		    "collection": {
		      "$id": -1,
		      "$ref": "collections",
		      "oid": -1,
		    },
		    "collectionId": -1,
		    "cover": "https://t3.ftcdn.net/jpg/00/92/53/56/360_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg",
		    "created": "2026-06-01T06:57:53.797Z",
		    "creatorRef": {
		      "_id": 2067190,
		      "avatar": "",
		      "email": "",
		      "name": "miyil99106",
		    },
		    "domain": "raindrop.io",
		    "excerpt": "",
		    "lastUpdate": "2026-06-01T06:57:53.797Z",
		    "link": "https://raindrop.io",
		    "media": [
		      {
		        "link": "https://t3.ftcdn.net/jpg/00/92/53/56/360_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg",
		        "type": "image",
		      },
		    ],
		    "note": "",
		    "removed": false,
		    "sort": 1740426124,
		    "tags": [
		      "createRaindrop",
		    ],
		    "title": "https://raindrop.io",
		    "type": "link",
		    "user": {
		      "$id": 2067190,
		      "$ref": "users",
		    },
		  },
		  "result": true,
		}
	`);
});

it("getRaindrop", async ({ setupTools, client, expect, generateTypeTest }) => {
	const raindrop = await setupTools.createRaindrop({
		media: [
			{
				link: "https://t3.ftcdn.net/jpg/00/92/53/56/360_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg",
			},
		],
		highlights: [{ text: "ignore", note: "" }],
		tags: ["getRaindrop"],
	});

	const response = await client.raindrop.getRaindrop(raindrop.item._id);

	generateTypeTest({ type: "GetRaindropResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "author": true,
		  "item": {
		    "_id": 1740426126,
		    "collection": {
		      "$id": -1,
		      "$ref": "collections",
		      "oid": -1,
		    },
		    "collectionId": -1,
		    "cover": "https://t3.ftcdn.net/jpg/00/92/53/56/360_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg",
		    "created": "2026-06-01T06:57:54.184Z",
		    "creatorRef": {
		      "_id": 2067190,
		      "avatar": "",
		      "email": "",
		      "name": "miyil99106",
		    },
		    "domain": "raindrop.io",
		    "excerpt": "",
		    "highlights": [
		      {
		        "_id": "6a1d2d728ab4d18ed44bbd94",
		        "created": "2026-06-01T06:57:54.184Z",
		        "creatorRef": {
		          "_id": 2067190,
		          "avatar": "",
		          "email": "",
		          "name": "miyil99106",
		        },
		        "lastUpdate": "2026-06-01T06:57:54.185Z",
		        "note": "",
		        "text": "ignore",
		      },
		    ],
		    "lastUpdate": "2026-06-01T06:57:54.184Z",
		    "link": "https://raindrop.io",
		    "media": [
		      {
		        "link": "https://t3.ftcdn.net/jpg/00/92/53/56/360_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg",
		        "type": "image",
		      },
		    ],
		    "note": "",
		    "removed": false,
		    "sort": 1740426126,
		    "tags": [
		      "getRaindrop",
		    ],
		    "title": "getRaindrop",
		    "type": "link",
		    "user": {
		      "$id": 2067190,
		      "$ref": "users",
		    },
		  },
		  "result": true,
		}
	`);
});

it("updateRaindrop", async ({
	setupTools,
	client,
	expect,
	generateTypeTest,
}) => {
	const raindrop = await setupTools.createRaindrop();

	const response = await client.raindrop.updateRaindrop(raindrop.item._id, {
		excerpt: "updateRaindrop",
		tags: ["updateRaindrop"],
		highlights: [{ text: "ignore", note: "" }],
	});

	generateTypeTest({ type: "UpdateRaindropResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "item": {
		    "__v": 1,
		    "_id": 1740426131,
		    "collection": {
		      "$id": -1,
		      "$ref": "collections",
		      "oid": -1,
		    },
		    "collectionId": -1,
		    "cover": "",
		    "created": "2026-06-01T06:57:54.839Z",
		    "creatorRef": {
		      "_id": 2067190,
		      "avatar": "",
		      "email": "",
		      "name": "miyil99106",
		    },
		    "domain": "raindrop.io",
		    "excerpt": "updateRaindrop",
		    "highlights": [
		      {
		        "_id": "6a1d2d73832bde5f7efe516e",
		        "created": "2026-06-01T06:57:55.203Z",
		        "creatorRef": 2067190,
		        "lastUpdate": "2026-06-01T06:57:55.204Z",
		        "note": "",
		        "text": "ignore",
		      },
		    ],
		    "lastUpdate": "2026-06-01T06:57:55.203Z",
		    "link": "https://raindrop.io",
		    "media": [],
		    "note": "",
		    "removed": false,
		    "sort": 1740426131,
		    "tags": [
		      "updateRaindrop",
		    ],
		    "title": "updateRaindrop",
		    "type": "link",
		    "user": {
		      "$id": 2067190,
		      "$ref": "users",
		    },
		  },
		  "result": true,
		}
	`);
});

it("removeRaindrop", async ({
	setupTools,
	client,
	expect,
	generateTypeTest,
}) => {
	const raindrop = await setupTools.createRaindrop();

	const response = await client.raindrop.removeRaindrop(raindrop.item._id);

	generateTypeTest({ type: "RemoveRaindropResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "item": {
		    "_id": 1740426133,
		    "collection": {
		      "$id": -99,
		      "$ref": "collections",
		      "oid": -99,
		    },
		    "collectionId": -99,
		    "cover": "",
		    "created": "2026-06-01T06:57:55.544Z",
		    "creatorRef": {
		      "_id": 2067190,
		      "avatar": "",
		      "email": "",
		      "name": "miyil99106",
		    },
		    "domain": "raindrop.io",
		    "excerpt": "",
		    "lastUpdate": "2026-06-01T06:57:55.917Z",
		    "link": "https://raindrop.io",
		    "media": [],
		    "note": "",
		    "order": 0,
		    "removed": true,
		    "sort": 1740426133,
		    "tags": [],
		    "title": "removeRaindrop",
		    "type": "link",
		    "user": {
		      "$id": 2067190,
		      "$ref": "users",
		    },
		  },
		  "result": true,
		}
	`);
});

it("uploadFile", async ({ client, expect, generateTypeTest }) => {
	const coverBlob = await fs.openAsBlob(path.join(__dirname, "./cover.png"));
	const cover = new File([coverBlob], "cover.png", { type: "image/png" });

	const response = await client.raindrop.uploadFile(cover, 0, {
		headers: {
			"Content-Type": "multipart/form-data; boundary=0000000000",
		},
	});

	generateTypeTest({ type: "UploadFileResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "item": {
		    "__v": 0,
		    "_id": 1740426138,
		    "collection": {
		      "$id": -1,
		      "$ref": "collections",
		      "oid": -1,
		    },
		    "collectionId": -1,
		    "cover": "https://rdl.ink/render/https%3A%2F%2Fup.raindrop.io%2Fraindrop%2Ffiles%2F174%2F042%2F613%2F8%2Fcover.png",
		    "created": "2026-06-01T06:57:56.356Z",
		    "creatorRef": {
		      "_id": 2067190,
		      "avatar": "",
		      "email": "",
		      "name": "miyil99106",
		    },
		    "domain": "up.raindrop.io",
		    "excerpt": "",
		    "file": {
		      "name": "cover.png",
		      "size": 111258,
		      "type": "image/png",
		    },
		    "lastUpdate": "2026-06-01T06:57:56.633Z",
		    "link": "https://api.raindrop.io/v2/raindrop/1740426138/file?type=image/png",
		    "media": [],
		    "note": "",
		    "removed": false,
		    "sort": 1740426138,
		    "tags": [],
		    "title": "cover.png",
		    "type": "image",
		    "user": {
		      "$id": 2067190,
		      "$ref": "users",
		    },
		  },
		  "result": true,
		}
	`);
});

it("uploadRaindropCover", async ({
	setupTools,
	client,
	expect,
	generateTypeTest,
}) => {
	const raindrop = await setupTools.createRaindrop();
	const coverBlob = await fs.openAsBlob(path.join(__dirname, "./cover.png"));
	const cover = new File([coverBlob], "cover.png", { type: "image/png" });

	const response = await client.raindrop.uploadRaindropCover(
		raindrop.item._id,
		cover,
		{
			headers: {
				"Content-Type": "multipart/form-data; boundary=0000000000",
			},
		},
	);

	generateTypeTest({ type: "UploadRaindropCoverResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "item": {
		    "__v": 1,
		    "_id": 1740426142,
		    "collection": {
		      "$id": -1,
		      "$ref": "collections",
		      "oid": -1,
		    },
		    "collectionId": -1,
		    "cover": "https://up.raindrop.io/raindrop/thumbs/174/042/614/2/1780297077431.png",
		    "created": "2026-06-01T06:57:57.007Z",
		    "creatorRef": {
		      "_id": 2067190,
		      "avatar": "",
		      "email": "",
		      "name": "miyil99106",
		    },
		    "domain": "raindrop.io",
		    "excerpt": "",
		    "lastUpdate": "2026-06-01T06:57:57.834Z",
		    "link": "https://raindrop.io",
		    "media": [
		      {
		        "link": "https://up.raindrop.io/raindrop/thumbs/174/042/614/2/1780297077431.png",
		        "type": "image",
		      },
		    ],
		    "note": "",
		    "removed": false,
		    "sort": 1740426142,
		    "tags": [],
		    "title": "uploadRaindropCover",
		    "type": "link",
		    "user": {
		      "$id": 2067190,
		      "$ref": "users",
		    },
		  },
		  "result": true,
		}
	`);
});

// ? Pro feature
it.skip("getPermanentCopy");

// ? Pro feature
it.skip("suggestForNewBookmark");

// ? Pro feature
it.skip("suggestForExistingBookmark");

it("getRaindrops", async ({ setupTools, client, expect, generateTypeTest }) => {
	const collection = await setupTools.createCollection();
	await setupTools.createRaindrop({
		collection: { $id: collection.item._id },
	});
	await setupTools.createRaindrop({
		collection: { $id: collection.item._id },
	});
	await setupTools.createRaindrop({
		collection: { $id: collection.item._id },
	});

	const response = await client.raindrop.getRaindrops(collection.item._id);

	generateTypeTest({ type: "GetRaindropsResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "collectionId": 71498497,
		  "count": 3,
		  "items": [
		    {
		      "_id": 1740426157,
		      "collection": {
		        "$id": 71498497,
		        "$ref": "collections",
		        "oid": 71498497,
		      },
		      "collectionId": 71498497,
		      "cover": "",
		      "created": "2026-06-01T06:57:59.513Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "avatar": "",
		        "email": "",
		        "name": "miyil99106",
		      },
		      "domain": "raindrop.io",
		      "excerpt": "",
		      "highlights": [],
		      "lastUpdate": "2026-06-01T06:57:59.513Z",
		      "link": "https://raindrop.io",
		      "media": [],
		      "note": "",
		      "removed": false,
		      "sort": 1740426157,
		      "tags": [],
		      "title": "getRaindrops",
		      "type": "link",
		      "user": {
		        "$id": 2067190,
		        "$ref": "users",
		      },
		    },
		    {
		      "_id": 1740426152,
		      "collection": {
		        "$id": 71498497,
		        "$ref": "collections",
		        "oid": 71498497,
		      },
		      "collectionId": 71498497,
		      "cover": "",
		      "created": "2026-06-01T06:57:59.121Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "avatar": "",
		        "email": "",
		        "name": "miyil99106",
		      },
		      "domain": "raindrop.io",
		      "excerpt": "",
		      "highlights": [],
		      "lastUpdate": "2026-06-01T06:57:59.122Z",
		      "link": "https://raindrop.io",
		      "media": [],
		      "note": "",
		      "removed": false,
		      "sort": 1740426152,
		      "tags": [],
		      "title": "getRaindrops",
		      "type": "link",
		      "user": {
		        "$id": 2067190,
		        "$ref": "users",
		      },
		    },
		    {
		      "_id": 1740426147,
		      "collection": {
		        "$id": 71498497,
		        "$ref": "collections",
		        "oid": 71498497,
		      },
		      "collectionId": 71498497,
		      "cover": "",
		      "created": "2026-06-01T06:57:58.726Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "avatar": "",
		        "email": "",
		        "name": "miyil99106",
		      },
		      "domain": "raindrop.io",
		      "excerpt": "",
		      "highlights": [],
		      "lastUpdate": "2026-06-01T06:57:58.726Z",
		      "link": "https://raindrop.io",
		      "media": [],
		      "note": "",
		      "removed": false,
		      "sort": 1740426147,
		      "tags": [],
		      "title": "getRaindrops",
		      "type": "link",
		      "user": {
		        "$id": 2067190,
		        "$ref": "users",
		      },
		    },
		  ],
		  "result": true,
		}
	`);
});

it("updateRaindrops", async ({
	setupTools,
	client,
	expect,
	generateTypeTest,
}) => {
	const collection = await setupTools.createCollection();
	const raindrop = await setupTools.createRaindrop({
		collection: { $id: collection.item._id },
	});

	const response = await client.raindrop.updateRaindrops(collection.item._id, {
		ids: [raindrop.item._id],
		tags: ["updateRaindrops"],
	});

	generateTypeTest({ type: "UpdateRaindropsResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "modified": 1,
		  "result": true,
		}
	`);
});

it("removeRaindrops", async ({
	setupTools,
	client,
	expect,
	generateTypeTest,
}) => {
	const collection = await setupTools.createCollection();
	const raindrop = await setupTools.createRaindrop({
		collection: { $id: collection.item._id },
	});

	const response = await client.raindrop.removeRaindrops(
		collection.item._id,
		"",
		{
			ids: [raindrop.item._id],
		},
	);

	generateTypeTest({ type: "RemoveRaindropsResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "modified": 1,
		  "result": true,
		}
	`);
});

it("createRaindrops", async ({ client, expect, generateTypeTest }) => {
	const response = await client.raindrop.createRaindrops({
		items: [
			{
				link: "https://raindrop.io",
				media: [
					{
						link: "https://t3.ftcdn.net/jpg/00/92/53/56/360_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg",
					},
				],
				tags: ["createRaindrops"],
			},
		],
	});

	generateTypeTest({ type: "CreateRaindropsResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "items": [
		    {
		      "__v": 0,
		      "_id": 1740426176,
		      "collection": {
		        "$id": -1,
		        "$ref": "collections",
		        "oid": -1,
		      },
		      "collectionId": -1,
		      "cover": "https://t3.ftcdn.net/jpg/00/92/53/56/360_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg",
		      "created": "2026-06-01T06:58:02.485Z",
		      "creatorRef": 2067190,
		      "domain": "raindrop.io",
		      "excerpt": "",
		      "highlights": [],
		      "lastUpdate": "2026-06-01T06:58:02.485Z",
		      "link": "https://raindrop.io",
		      "media": [
		        {
		          "link": "https://t3.ftcdn.net/jpg/00/92/53/56/360_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg",
		          "type": "image",
		        },
		      ],
		      "note": "",
		      "removed": false,
		      "sort": 1740426176,
		      "tags": [
		        "createRaindrops",
		      ],
		      "title": "https://raindrop.io",
		      "type": "link",
		      "user": {
		        "$id": 2067190,
		        "$ref": "users",
		      },
		    },
		  ],
		  "result": true,
		}
	`);
});
