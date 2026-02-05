import type { Task } from "@vitest/runner";
import slugify from "slugify";

export function taskId(task: Task): string {
	let id = `${task.suite?.name || ""}-${task.name}`;
	id = id.replace(/^-/, "");

	return slugify(id);
}
