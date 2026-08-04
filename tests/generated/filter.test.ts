import { it } from "^/tests/_helpers/vitest";

it("getFilters", async ({
	setupTools,
	client,
	expect,
	generateTypeTest,
	resetData: _,
}) => {
	await setupTools.createRaindrop();
	await setupTools.createRaindrop({ important: true });
	await setupTools.createRaindrop({ tags: ["getFilters-1", "getFilters-2"] });

	const response = await client.filter.getFilters(0);

	generateTypeTest({ type: "GetFiltersResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "collectionId": 0,
		  "created": [
		    {
		      "_id": "2026-08",
		      "count": 3,
		    },
		  ],
		  "important": {
		    "count": 1,
		  },
		  "notag": {
		    "count": 2,
		  },
		  "result": true,
		  "tags": [
		    {
		      "_id": "getFilters-1",
		      "count": 1,
		    },
		    {
		      "_id": "getFilters-2",
		      "count": 1,
		    },
		  ],
		  "total": {
		    "count": 3,
		  },
		  "types": [
		    {
		      "_id": "link",
		      "count": 3,
		    },
		  ],
		}
	`);
});
