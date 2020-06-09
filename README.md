# ts2742-repro

Related GitHub issues:
- https://github.com/microsoft/TypeScript/issues/36675
- https://github.com/microsoft/TypeScript/issues/29808
- https://github.com/microsoft/TypeScript/issues/32970
- https://github.com/microsoft/TypeScript/issues/29221
- https://github.com/microsoft/TypeScript/issues/30858
- https://github.com/microsoft/TypeScript/issues/36866
- https://github.com/microsoft/TypeScript/pull/37438

---

Install pnpm
`curl -L https://raw.githubusercontent.com/pnpm/self-installer/master/install.js | node`

`pnpm install`

`./node_modules/.bin/tsc -b tsconfig.json`

```
src/getRouteParams.ts:5:14 - error TS2742: The inferred type of 'getRouteParams' cannot be named without a reference to '.pnpm/@types/react-router-dom@5.1.5/node_modules/@types/react-router'. This is likely not portable. A type annotation is necessary.

5 export const getRouteParams = (tabName?: TabNames) => ({
               ~~~~~~~~~~~~~~

src/getRouteParams.ts:5:14 - error TS2742: The inferred type of 'getRouteParams' cannot be named without a reference to '.pnpm/@types/react-router@5.1.7/node_modules/@types/history'. This is likely not portable. A type annotation is necessary.

5 export const getRouteParams = (tabName?: TabNames) => ({
               ~~~~~~~~~~~~~~


Found 2 errors.
```

Edit tsconfig.json to `"preserveSymlinks": true`

`./node_modules/.bin/tsc -b tsconfig.json`

No errors!
