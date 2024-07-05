# `@skgen/eslint-config-base`

## Install:

```sh
pnpm add -D @skgen/eslint-config-base eslint@^8.0.0
```

```js
// .eslintrc.cjs

module.exports = {
  extends: [
    '@skgen/eslint-config-base',
  ],
  parserOptions: {
    project: [
      './tsconfig.json', // your tsconfig file
    ],
  },
};
```