module.exports = {
  extends: [
    '@patriarche/eslint-config-base',
  ],
  parserOptions: {
    project: [
      './tsconfig.app.json',
    ],
  },
};