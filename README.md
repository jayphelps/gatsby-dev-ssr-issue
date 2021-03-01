## Reproducing in Gatsby app

```shell
npm install
npm run develop
```

To reproduce the issue, edit this [src/pages/index.js](src/pages/index.js) component, then do a full page refresh.

## Source code for @jayphelps/fake-package

```js
if (globalThis.fakePackageHasBeenImported) {
  throw new Error(
    'globalThis.fakePackageHasBeenImported has already been set to true, meaning this module has been duplicated and evaluated more than once within the same JS isolate.',
  );
}

globalThis.fakePackageHasBeenImported = true;
```

## Comparison of Next.js behavior

```shell
cd nextjs-app
npm install
npm run dev
```

Because it's helpful to see what others in the community have already done about this problem, I've included a Next.js app that does the same thing, but where the problem does not happen because it only evaluates node_modules once; it does not duplicate them.

Note, however, the problem does happen if your own Next.js app's code has global state, like it does in Gatsby too. That's a much harder problem to solve, and not an issue for me personally right now, just mentioning for clarity.
