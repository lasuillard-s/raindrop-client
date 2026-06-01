import { it } from "^/tests/_helpers/vitest";

it("getTagsInCollection", async ({
	setupTools,
	client,
	expect,
	generateTypeTest,
}) => {
	const collection = await setupTools.createCollection();
	await setupTools.createRaindrop({
		collection: { $id: collection.item._id },
		tags: [
			"getTagsInCollection-1",
			"getTagsInCollection-2",
			"getTagsInCollection-3",
		],
	});

	const response = await client.tag.getTagsInCollection(collection.item._id);

	generateTypeTest({ type: "GetTagsInCollectionResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "items": [
		    {
		      "_id": "getTagsInCollection-1",
		      "count": 1,
		    },
		    {
		      "_id": "getTagsInCollection-2",
		      "count": 1,
		    },
		    {
		      "_id": "getTagsInCollection-3",
		      "count": 1,
		    },
		  ],
		  "result": true,
		}
	`);
});

it("renameOrMergeTags", async ({
	setupTools,
	client,
	expect,
	generateTypeTest,
}) => {
	const collection = await setupTools.createCollection();
	await setupTools.createRaindrop({
		collection: { $id: collection.item._id },
		tags: ["renameOrMergeTags-1", "renameOrMergeTags-2", "renameOrMergeTags-3"],
	});

	const response = await client.tag.renameOrMergeTags(collection.item._id, {
		tags: ["renameOrMergeTags-1", "renameOrMergeTags-2"],
		replace: "renameOrMergeTags-3",
	});

	generateTypeTest({ type: "SimpleResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "result": true,
		}
	`);
});

it("removeTagsFromCollection", async ({
	setupTools,
	client,
	expect,
	generateTypeTest,
}) => {
	const collection = await setupTools.createCollection();
	await setupTools.createRaindrop({
		collection: { $id: collection.item._id },
		tags: [
			"removeTagsFromCollection-1",
			"removeTagsFromCollection-2",
			"removeTagsFromCollection-3",
		],
	});

	const response = await client.tag.removeTagsFromCollection(
		collection.item._id,
		{ tags: ["removeTagsFromCollection-1", "removeTagsFromCollection-2"] },
	);
	generateTypeTest({ type: "SimpleResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "result": true,
		}
	`);
});
