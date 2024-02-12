# LEM SSR Test

## Run without SSR:

Set `ssr` to `false` in nuxt.config.ts.

Make production build:

```shell
npm run build
```

Run:

```shell
node .output/server/index.mjs
```

## Run with SSR:

Set `ssr` to `true` in nuxt.config.ts.

Make production build:

```shell
npm run build
```

Run:

```shell
node .output/server/index.mjs
```
