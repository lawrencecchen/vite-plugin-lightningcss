# Vite Lightning CSS Plugin

Lightning CSS is an extremely fast CSS parser, transformer, bundler, and minifier.

It's a really fast alternative to autoprefixer.

Go here to read more about Lightning CSS: https://lightningcss.dev/

## Installation

```bash
npm i --save-dev vite-plugin-lightningcss

pnpm add -D vite-plugin-lightningcss

yarn add --dev vite-plugin-lightningcss

bun add -d vite-plugin-lightningcss
```

```ts
// vite.config.ts
import lightningcss from "vite-plugin-lightningcss";

export default {
  plugins: [
    lightningcss({
      /* options */
    }),
  ],
};
```

That's it!

## Options

```ts
coming soon :)
```

## Todos

- [ ] support webassembly option so this package works in stackblitz
