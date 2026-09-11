import slugify from "slugify";
import type { RunnerTask } from "vitest";

export function taskId(task: RunnerTask): string {
	let id = `${task.suite?.name || ""}-${task.name}`;
	id = id.replace(/^-/, "");

	return slugify(id);
}
