module.exports = {
  extends: [
    '@skgen/eslint-config-base',
  ],
  parserOptions: {
    project: [
      './tsconfig.app.json',
    ],
  },
};