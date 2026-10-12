# lumisxh.github.io

Landing page for [lumisxh.github.io](https://lumisxh.github.io/). The page shows the LuMiSxh logo and nothing else.

## Develop

Use Node.js 24.14 or later and pnpm.

```sh
pnpm install
pnpm dev
```

| Task         | Command             |
| ------------ | ------------------- |
| Check types  | `pnpm check`        |
| Check format | `pnpm format:check` |
| Build        | `pnpm build`        |

The build writes the static site to `build/`.

## Deploy

A push to `main` runs `.github/workflows/pages.yml`. The workflow builds the site and deploys it to GitHub Pages.
