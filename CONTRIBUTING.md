# 🤝 Contributing

Thank you for your interest in contributing to raindrop-client!

## 🏗️ Project Overview

This is an unofficial Axios client for the Raindrop.io API, built using OpenAPI generator. The project aims to:

- Provide an unofficial OpenAPI schema for Raindrop.io
- Bridge the gap between official documentation and actual API responses through schema testing
- Deliver a type-safe, generated client package with additional functionality

## 🛠️ Development Setup

### Prerequisites

- Node.js >= 20
- Java (required for OpenAPI generator CLI)
- Make (optional, for using make targets which provide shortcuts for common tasks)

### Dev Container

You can used Dev Container configuration located in `.devcontainer.example` directory. You can copy it to `.devcontainer` and modify it to your needs.

### Nix

Alternatively, you can use the provided Nix configuration (`shell.nix`) for an isolated development environment. Use it with your preferred tools such as [direnv](https://direnv.net/), [nix-direnv](https://github.com/nix-community/nix-direnv), and so on.

### Make Targets

Run `make` to list available targets. It should show something like this:

```bash
$ make
Makefile
help                           Show help
install                        Install deps and tools
init                           Initialize the project
update                         Update deps and tools
ci                             Run CI tasks
generate                       Generate codes from schemas
fmt                            Run autoformatters
fix                            Apply autofixes
lint                           Run all linters
test                           Run tests
test-refresh                   Invalidate recordings and run tests to update them
docs                           Generate dev documents
clean                          Remove temporary files
```

### Installation

Run the following to install project dependencies and set up pre-commit hooks:

```bash
$ make install
$ make init
```

## 🧪 Test Setup

This project uses [Vitest](https://vitest.dev/) for unit testing and [Polly.js](https://polly.js.org/) for HTTP request mocking/recording.

**Note:** While Vite typically uses `vite.config.ts`, this project uses `vite.config.mts` to support top-level await in the configuration.

### ▶️ Test Execution

To run all tests:

```bash
$ make test
```

This runs both unit tests and type tests. You can also run them separately:

- `npm run test:unit` — Run unit tests with coverage
- `npm run test:type` — Run type assertion tests only

### 📼 Test Recordings

Recordings are stored in `tests/__recordings__/` as Polly.js cassettes capturing real API responses. These recordings allow tests to run offline without making actual API calls.

### 🔄 Test Recording Workflow

> [!CAUTION]
> **DO NOT** use your personal Raindrop.io account token for testing! It will make destructive changes to your account. Instead, create a test account and use its token.

To record fresh API responses (requires `__RAINDROP_CLIENT_TEST_API_TOKEN`):

```bash
$ make test-refresh
```

This command:
1. Deletes all existing recordings
2. Runs tests in Polly.js update mode to record fresh API responses
3. Regenerates type tests based on the new recordings

The `__RAINDROP_CLIENT_TEST_API_TOKEN` environment variable enables recording real API responses for test mocking. Create a Raindrop.io API token in your [Raindrop.io account settings](https://app.raindrop.io/settings/integrations) and set it before running tests:

```bash
$ __RAINDROP_CLIENT_TEST_API_TOKEN=your_token make test-refresh
```

Your API tokens will be redacted from the recordings, but please double check the generated recordings does not contain your token.

### 🔬 Type Test Generation

When tests run with `__RAINDROP_CLIENT_TEST_API_TOKEN` available, type tests are automatically generated in `tests/__typechecks__/`. These tests validate that the TypeScript types match actual API responses.

The generation process:
1. Tests register type assertions using `generateTypeTest` hook
2. After all tests complete, `generateAllTests()` creates TypeScript files with type assertions
3. Generated files are formatted with Biome

## 🏗️ Project Architecture

- `src/generated/` - Auto-generated code from OpenAPI schema (do not edit manually)
- `src/client/` - Custom client code with convenience methods wrapping generated API
- `openapi.yaml` - Unofficial OpenAPI schema for Raindrop.io API
- `openapitools.json` - OpenAPI generator CLI configuration

## 🎨 Code Style and Linting

This project uses [Biome](https://biomejs.dev/) for formatting and linting.

## 📝 Submitting Issues and Pull Requests

Please feel free to submit issues and pull requests on GitHub. Any feedback is appreciated!

## 🚀 Release Process

Releases are published automatically through GitHub Actions. The release workflow operates in two stages:

1. **Prepare Release** (`.github/workflows/prepare-release.yaml`): Triggered manually via `workflow_dispatch` with a semver tag input. It validates the tag format, bumps the package version, and opens a pull request titled `Release <tag>`.
2. **Publish** (`.github/workflows/release.yaml`): Triggered when a GitHub release is published. It builds the package, creates a release archive, and publishes to npm using a trusted publisher configuration.

Documentation is updated automatically via the `docs.yaml` workflow when new tags are pushed.
