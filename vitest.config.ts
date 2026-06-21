import { codecovVitePlugin } from "@codecov/vite-plugin";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [
		tsconfigPaths(),
		codecovVitePlugin({
			enableBundleAnalysis: true,
			bundleName: "raindrop-client",
			oidc: {
				useGitHubOIDC: true,
			},
		}),
	],
	test: {
		// Run tests in serial to avoid race conditions
		fileParallelism: false,
		sequence: {
			concurrent: false,
		},
		testTimeout: 10_000,
		include: ["tests/**/*.{test,spec}.{js,ts}"],
		exclude: ["tests/__typechecks__/*", "**/__mocks__/*"],
		reporters: ["default", "junit"],
		// NOTE: outputFile should passed to CLI to avoid report being overwritten
		coverage: {
			include: ["src/**"],
			exclude: [
				"src/**/__mocks__/*",
				"src/**/*.d.ts",
				"src/generated/.openapi-generator/*",
			],
			reporter: ["text", "clover", "html"],
		},
		setupFiles: ["tests/setup.ts"],
		typecheck: {
			// Run explicitly (`--typecheck`, `--typecheck.only`)
			enabled: false,
			include: ["tests/__typechecks__/**/*.test-d.ts"],
		},
	},
});
