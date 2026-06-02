import { codecovVitePlugin } from "@codecov/vite-plugin";
import { resolve } from "node:path";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";
import packageManifest from "./package.json";

export default defineConfig({
	plugins: [
		tsconfigPaths(),
		dts({
			rollupTypes: true,
		}),
		codecovVitePlugin({
			enableBundleAnalysis: true,
			bundleName: "raindrop-client",
			oidc: {
				useGitHubOIDC: true,
			},
		}),
	],
	build: {
		lib: {
			entry: resolve(__dirname, "src/index.ts"),
			formats: ["es", "cjs"],
			fileName: (format) => `index.${format}.js`,
		},
		rollupOptions: {
			external: [...Object.keys(packageManifest.dependencies), /^node:.*/],
		},
		target: "ESNext",
	},
	test: {
    // Run tests in serial to avoid race conditions
    fileParallelism: false,
		sequence: {
			concurrent: false,
		},
		testTimeout: 10_000,
		include: ["tests/**/*.{test,spec}.{js,ts}"],
		exclude: ["**/__mocks__/*"],
		reporters: ["default", "junit"],
		// NOTE: outputFile should passed to CLI to avoid report being overwritten
		coverage: {
			include: ["src/**"],
			exclude: ["src/**/__mocks__/*", "src/**/*.d.ts", 'src/generated/.openapi-generator/*'],
			reporter: ["text", "clover", "html"],
		},
		setupFiles: ["dotenv/config", "tests/setup.ts"],
		api: {
			// Publish for * if inside container for forwarding
			host: process.env.CONTAINER ? "0.0.0.0" : "127.0.0.1",
			port: 51204,
		},
		typecheck: {
			// Run explicitly (`--typecheck`, `--typecheck.only`)
			enabled: false,
		},
	},
});
