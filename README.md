# raindrop-client

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://img.shields.io/npm/v/%40lasuillard%2Fraindrop-client)](https://www.npmjs.com/package/@lasuillard/raindrop-client)
[![codecov](https://codecov.io/gh/lasuillard-s/raindrop-client/graph/badge.svg?token=bPq2geqXLe)](https://codecov.io/gh/lasuillard-s/raindrop-client)

An Axios client for Raindrop.io, generated with OpenAPI Generator.

## ✨ Features

raindrop-client is a TypeScript package with these features:

- **OpenAPI schema** for the Raindrop.io API
- **Generated Axios client** with typed request and response models
- **Convenience wrappers** for authentication, collections, raindrops, and tree helpers
- **Type-checked and recorded tests** to detect schema drift and behavior changes

## 🚀 How to use

Install raindrop-client from npm to use it in your own code:

```bash
npm install @lasuillard/raindrop-client
```

Interactive Node.js REPL example:

```js
> const { client: { Raindrop }, generated } = await import("@lasuillard/raindrop-client");

// Create a Raindrop client
> const accessToken = "<YOUR_ACCESS_TOKEN>";
> const client = new Raindrop(
|   new generated.Configuration({ accessToken }),
| );

// Query the current user
> const { data: { user } } = await client.user.getCurrentUser();
> user
{
  tfa: { enabled: false },
  files: {
    used: 0,
    size: 100000000,
    lastCheckPoint: '2026-06-21T02:55:34.718Z'
  },
  _id: 0000000,
  fullName: '...',
  name: '...',
  email: '...',
  avatar: '',
  pro: false,
  groups: [
    {
      title: 'raindrop-client',
      hidden: false,
      sort: 0,
      collections: []
    }
  ],
  lastAction: '2026-06-21T02:56:27.772Z',
  lastVisit: '2026-06-21T02:56:02.471Z',
  registered: '2024-04-21T06:46:01.480Z',
  lastUpdate: '2026-06-21T02:56:27.772Z',
  config: {
    default_collection_view: 'list',
    raindrops_hide: [
      'list_excerpt',
      'simple_excerpt',
      'grid_excerpt',
      'masonry_excerpt'
    ],
    raindrops_buttons: [ 'select', 'preview', 'edit', 'remove' ],
    raindrops_search_by_score: true,
    raindrops_search_incollection: false,
    broken_level: 'default',
    font_size: 0,
    nested_view_legacy: true,
    add_default_collection: -1,
    acknowledge: [ 'onboard_upgrade' ],
    last_collection: -1,
    raindrops_sort: 'title',
    ai_suggestions: true,
    filters_hide: false,
    ai_assistant: true
  },
  emailConfirmed: true,
  password: true
}
```

For the full API surface, see the generated source under [`src/generated`](./src/generated) or the online documentation at [lasuillard-s.github.io/raindrop-client](https://lasuillard-s.github.io/raindrop-client/).

## ⚠️ Limitations

Because this package is based on an unofficial OpenAPI specification, some endpoints or response shapes may differ from the live Raindrop.io API. Pro-only features are not covered by the schema.

## 💖 Contributing

Please refer to [CONTRIBUTING.md](./CONTRIBUTING.md) for more information on how to contribute to this project.

## 📜 License

This project is licensed under the MIT License.
