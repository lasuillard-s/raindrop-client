import { it } from "^/tests/_helpers/vitest";
import fs from "node:fs";
import path from "node:path";

it("parseURL", async ({ client, expect, generateTypeTest }) => {
	const response = await client.import.parseURL("https://example.com");

	generateTypeTest({ type: "ParseURLResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "item": {
		    "cover": "<screenshot>",
		    "excerpt": "",
		    "media": [],
		    "meta": {
		      "tags": [],
		    },
		    "title": "Example Domain",
		    "type": "link",
		  },
		  "result": true,
		}
	`);
});

it("checkURLsExist", async ({
	setupTools,
	client,
	expect,
	generateTypeTest,
}) => {
	await setupTools.createRaindrop({
		link: "https://raindrop.com",
	});
	const response = await client.import.checkURLsExist({
		urls: ["https://raindrop.com"],
	});

	generateTypeTest({ type: "CheckURLsExistResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "duplicates": [
		    {
		      "_id": 1809460511,
		      "link": "https://raindrop.com",
		    },
		  ],
		  "id": 1809460511,
		  "ids": [
		    1809460511,
		  ],
		  "result": true,
		}
	`);
});

it("importHTMLBookmarkFile", async ({ client, expect, generateTypeTest }) => {
	const blob = await fs.openAsBlob(
		path.join(__dirname, "./chrome-bookmarks.html"),
	);
	const file = new File([blob], "chrome-bookmarks.html", {
		type: "text/html",
	});

	const response = await client.import.importHTMLBookmarkFile(file, {
		headers: {
			"Content-Type": "multipart/form-data; boundary=0000000000",
		},
	});

	generateTypeTest({ type: "ImportHTMLBookmarkFileResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "count": {
		    "bookmarks": 8,
		    "duplicates": 0,
		    "folders": 2,
		    "highlights": 0,
		    "tags": 0,
		  },
		  "items": [
		    {
		      "bookmarks": [
		        {
		          "cover": "",
		          "created": "2023-03-09T01:22:45.000Z",
		          "excerpt": "",
		          "highlights": [],
		          "important": false,
		          "lastUpdate": "2023-03-09T01:22:45.000Z",
		          "link": "https://support.google.com/chrome/answer/157179?co=GENIE.Platform%3DDesktop&hl=en",
		          "media": [],
		          "note": "",
		          "tags": [],
		          "title": "Chrome keyboard shortcuts",
		        },
		      ],
		      "created": "2024-06-27T11:34:03.000Z",
		      "folders": [],
		      "lastUpdate": "2024-06-27T11:34:06.000Z",
		      "title": "Keyboard Shortcuts",
		    },
		    {
		      "bookmarks": [
		        {
		          "cover": "",
		          "created": "2023-01-29T13:03:03.000Z",
		          "excerpt": "",
		          "highlights": [],
		          "important": false,
		          "lastUpdate": "2023-01-29T13:03:03.000Z",
		          "link": "https://chat.openai.com/chat",
		          "media": [],
		          "note": "",
		          "tags": [],
		          "title": "ChatGPT",
		        },
		        {
		          "cover": "",
		          "created": "2023-04-22T02:40:55.000Z",
		          "excerpt": "",
		          "highlights": [],
		          "important": false,
		          "lastUpdate": "2023-04-22T02:40:55.000Z",
		          "link": "https://gemini.google.com/",
		          "media": [],
		          "note": "",
		          "tags": [],
		          "title": "Gemini",
		        },
		        {
		          "cover": "",
		          "created": "2023-05-12T09:24:37.000Z",
		          "excerpt": "",
		          "highlights": [],
		          "important": false,
		          "lastUpdate": "2023-05-12T09:24:37.000Z",
		          "link": "https://stackoverflow.com/",
		          "media": [],
		          "note": "",
		          "tags": [],
		          "title": "Stack Overflow",
		        },
		        {
		          "cover": "",
		          "created": "2023-05-12T09:24:43.000Z",
		          "excerpt": "",
		          "highlights": [],
		          "important": false,
		          "lastUpdate": "2023-05-12T09:24:43.000Z",
		          "link": "https://www.reddit.com/",
		          "media": [],
		          "note": "",
		          "tags": [],
		          "title": "Reddit",
		        },
		        {
		          "cover": "",
		          "created": "2024-02-17T01:33:16.000Z",
		          "excerpt": "",
		          "highlights": [],
		          "important": false,
		          "lastUpdate": "2024-02-17T01:33:16.000Z",
		          "link": "https://devv.ai/en",
		          "media": [],
		          "note": "",
		          "tags": [],
		          "title": "Devv",
		        },
		        {
		          "cover": "",
		          "created": "2024-03-24T13:58:25.000Z",
		          "excerpt": "",
		          "highlights": [],
		          "important": false,
		          "lastUpdate": "2024-03-24T13:58:25.000Z",
		          "link": "https://containers.dev/features",
		          "media": [],
		          "note": "",
		          "tags": [],
		          "title": "Dev Container Features",
		        },
		        {
		          "cover": "",
		          "created": "2024-04-04T14:20:27.000Z",
		          "excerpt": "",
		          "highlights": [],
		          "important": false,
		          "lastUpdate": "2024-04-04T14:20:27.000Z",
		          "link": "https://hub.docker.com/",
		          "media": [],
		          "note": "",
		          "tags": [],
		          "title": "Docker Hub",
		        },
		      ],
		      "created": "2026-08-04T00:51:40.309Z",
		      "folders": [],
		      "lastUpdate": "2026-08-04T00:51:40.309Z",
		      "title": "Import",
		    },
		  ],
		  "result": true,
		}
	`);
});
