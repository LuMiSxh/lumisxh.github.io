<div align="center">

# lumisxh.github.io

**Landing page of LuMiSxh.**

A static page that shows the LuMiSxh logo. Built with SvelteKit and deployed to GitHub Pages.

[![MPL-2.0 license](https://img.shields.io/badge/license-MPL--2.0-477acc?style=flat-square&labelColor=23252a)](LICENSE)

**[Website](https://lumisxh.github.io/)**

</div>

## Development

You need Node.js 24.14 or later and [pnpm](https://pnpm.io/).

```sh
git clone https://github.com/LuMiSxh/lumisxh.github.io.git
cd lumisxh.github.io
pnpm install
pnpm dev
```

| Command             | Purpose                            |
| ------------------- | ---------------------------------- |
| `pnpm check`        | Check types and Svelte diagnostics |
| `pnpm format:check` | Check formatting                   |
| `pnpm build`        | Write the static site to `build/`  |

## Deploy

A push to `main` runs [`pages.yml`](.github/workflows/pages.yml). The workflow builds the site and deploys it to GitHub Pages. A pull request runs the same checks and build without a deploy.

## License

lumisxh.github.io is licensed under the [Mozilla Public License 2.0](LICENSE).

Copyright © 2026 LuMiSxh.
