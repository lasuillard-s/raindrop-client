# raindrop-client

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![codecov](https://codecov.io/gh/lasuillard-s/raindrop-client/graph/badge.svg?token=bPq2geqXLe)](https://codecov.io/gh/lasuillard-s/raindrop-client)
[![NPM Version](https://img.shields.io/npm/v/%40lasuillard%2Fraindrop-client)](https://www.npmjs.com/package/@lasuillard/raindrop-client)

Axios client built with OpenAPI generator for Raindrop.io ☔

## ✨ Features

Primary features and goals are:

-   Provide unofficial OpenAPI schema for Raindrop.io
-   Fill the gap between official documentation and reality(response) with schema testing
-   Generated client package for Axios with extra functionalities

## 🚀 Installation

If you wish to use client package, install it:

```bash
npm install @lasuillard/raindrop-client
```

## 🛠️ Generate your own client

You can use OpenAPI schema in this repository to generate your own client. Following is example using [openapitools/openapi-generator-cli](https://www.npmjs.com/package/@openapitools/openapi-generator-cli):

```bash
npm install --global @openapitools/openapi-generator-cli
openapi-generator-cli generate \
    --input-spec https://raw.githubusercontent.com/lasuillard-s/raindrop-client/main/openapi.yaml \
    --generator-name typescript-axios \
    --skip-validate-spec \
    --output ./out
```

You may need Java installed as openapi-generator-cli uses it.

## 💖 Contributing

Please refer to [CONTRIBUTING.md](./CONTRIBUTING.md)

## 📜 License

This project is licensed under the terms of the MIT license.
