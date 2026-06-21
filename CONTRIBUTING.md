# ❤️‍🔥 Contributing to this project

Thank you for your interest in contributing to **raindrop-client**.

## 🐛 Reporting issues

Please report issues in our [GitHub repository](https://github.com/lasuillard-s/raindrop-client/issues). Before submitting an issue, search for existing issues to avoid duplicates.

## 🏗️ Project overview

This project is an unofficial Axios client for the Raindrop.io API. It uses the OpenAPI schema in this repository to generate the published package and the test fixtures that keep the schema aligned with the API.

### 🛠️ Tech stack

This project uses:

- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/) for HTTP requests
- [OpenAPI Generator](https://openapi-generator.tech/) for the generated client in `src/generated/`
- [Vitest](https://vitest.dev/) and [Polly.js](https://netflix.github.io/pollyjs/#/) for tests and recorded HTTP fixtures
- [Biome](https://biomejs.dev/) for formatting and linting
- [tsup](https://tsup.egoist.dev/) for package builds

### 📂 Key directory structure

- `src/`: Source code
- `src/client/`: Handwritten client wrappers and convenience methods
- `src/generated/`: OpenAPI-generated client code and types
- `tests/generated/`: Tests for the generated code
- `tests/__typechecks__/`: Generated type assertions
- `tests/__recordings__/`: Polly.js recordings used by the tests
- `flake.nix`: For the Nix-based development environment
- `Justfile`: Development commands
- `openapi.yaml`: Unofficial OpenAPI schema for Raindrop.io
- `openapitools.json`: OpenAPI Generator CLI configuration
- `package.json`: Project configuration and dependencies

## 🔧 Set up the development environment

The repository provides a Nix-based development environment. Run `nix develop` to enter the shell, then run `just install` to install dependencies.

The Nix shell provides the tools used in this repository, including:

- `just`
- `pre-commit`
- `nodejs_24` (including `npm`)
- `jre`
- `pipx`

If you prefer a Dev Container, an example configuration is available in [`.devcontainer.example/devcontainer.json`](./.devcontainer.example/devcontainer.json). Copy it to `.devcontainer/devcontainer.json` to use it locally.

## ✅ Verifying changes

Before opening a pull request, run `just ci` to verify formatting, linting, type checks, generated code, and tests.

### 🧪 Test setup

This project uses [Vitest](https://vitest.dev/) for unit and type tests and [Polly.js](https://netflix.github.io/pollyjs/#/) for HTTP request recording. Run `npm run test` to execute the full suite. You can also run them separately:

- `npm run test:unit` runs the unit tests with coverage
- `npm run test:type` runs the type tests only

#### Test recording

Recorded HTTP fixtures live in [`tests/__recordings__`](./tests/__recordings__). They let the test suite run offline without hitting the live Raindrop.io API for every case.

To refresh the recordings and regenerate the matching type assertions:

```bash
__RAINDROP_CLIENT_TEST_API_TOKEN=your_token just test-refresh
```

> [!CAUTION]
> **Do not** use your personal Raindrop.io token for test recording. Use a dedicated test account instead.

This command:

1. Deletes the existing recordings in `tests/__recordings__/`
1. Re-runs the unit tests in update mode to record fresh API responses
1. Regenerates the type tests under `tests/__typechecks__/`

The `__RAINDROP_CLIENT_TEST_API_TOKEN` environment variable is required for recording real API responses. The recordings are filtered to remove volatile values, but you should still review the resulting diffs before committing them.

#### Type test generation

When tests run with `__RAINDROP_CLIENT_TEST_API_TOKEN` available, type tests are generated in `tests/__typechecks__/`. These validate that the TypeScript types still match real API responses.

The generation flow is:

1. Tests register type assertions with `generateTypeTest`.
1. After all tests complete, `generateAllTests()` writes the type-check files.
1. Generated files are formatted with Biome.

## ✨ Submitting changes

Please open pull requests on GitHub. Before submitting, make sure `just ci` passes and that any regenerated files are included in the change.

## 🚀 Release process

The repository uses GitHub Actions for releases and documentation:

1. Run the [Prepare Release](https://github.com/lasuillard-s/raindrop-client/actions/workflows/prepare-release.yaml) workflow manually with a semver tag such as `v0.8.1`.
1. Review and merge the pull request created by the workflow.
1. Create and publish a GitHub release with the same tag.
1. The [Release](./.github/workflows/release.yaml) workflow builds the package, attaches `dist.tar.gz` to the GitHub release, and publishes the package to npm.

By pushing a new tag, documentation is also built and published to [GitHub Pages](https://lasuillard-s.github.io/raindrop-client/) automatically.
