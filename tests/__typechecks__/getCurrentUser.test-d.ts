import { assertType, it } from "vitest";
import type { GetCurrentUserResponse } from "~/generated/api";

it("getCurrentUser", () => {
	assertType<GetCurrentUserResponse>({
		result: true,
		user: {
			tfa: { enabled: false },
			files: {
				used: 111258,
				size: 100000000,
				lastCheckPoint: "2026-05-15T02:00:34.506Z",
			},
			_id: 2067190,
			fullName: "miyil99106",
			name: "miyil99106",
			email: "14g4m@wshu.net",
			avatar: "",
			pro: false,
			groups: [
				{ title: "raindrop-client", hidden: false, sort: 0, collections: [] },
			],
			lastAction: "2026-06-01T06:58:11.773Z",
			lastVisit: "2026-06-01T02:28:50.392Z",
			registered: "2024-04-21T06:46:01.480Z",
			lastUpdate: "2026-06-01T06:58:11.774Z",
			config: {
				default_collection_view: "list",
				raindrops_hide: [
					"list_excerpt",
					"simple_excerpt",
					"grid_excerpt",
					"masonry_excerpt",
				],
				raindrops_buttons: ["select", "preview", "edit", "remove"],
				raindrops_search_by_score: true,
				raindrops_search_incollection: false,
				broken_level: "default",
				font_size: 0,
				nested_view_legacy: true,
				add_default_collection: -1,
				acknowledge: ["onboard_upgrade"],
				last_collection: -1,
				raindrops_sort: "title",
				ai_suggestions: true,
				filters_hide: false,
				ai_assistant: true,
			},
			emailConfirmed: true,
			password: true,
		},
	});
});
