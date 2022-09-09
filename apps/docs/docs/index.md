# Vite Lightning CSS Plugin

Lightning CSS is an extremely fast CSS parser, transformer, bundler, and minifier.

It's a really fast alternative to autoprefixer.

Go here to read more about Lightning CSS: https://lightningcss.dev/

## Installation

```bash
npm i --save-dev vite-plugin-lightningcss
```

```bash
pnpm add -D vite-plugin-lightningcss
```

```bash
yarn add --dev vite-plugin-lightningcss
```

```bash
bun add -d vite-plugin-lightningcss
```

## Usage

```ts
// vite.config.ts
import lightningcss from "vite-plugin-lightningcss";

export default {
  plugins: [
    lightningcss({
      browserslist: "last 2 versions",
    }),
  ],
};
```

```css
/* index.css */
h1 {
  color: oklab(59.686% 0.1009 0.1192);
}
```

```css
/* dist/assets/index.?????.css */
h1 {
  color: #c65d07;
  color: lab(52.2319% 40.1449 59.9171);
}
```

That's it!

## Options

```ts
coming soon :)
```

## Todos

- [ ] support webassembly option so this package works in stackblitz
