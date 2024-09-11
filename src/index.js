const { rules } = require('eslint-config-airbnb-typescript/lib/shared');

module.exports = {
  root: true,
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
  ],
  rules: {
    'no-restricted-syntax': 'off',
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'semi',
        requireLast: true,
      },
      singleline: {
        delimiter: 'semi',
        requireLast: false,
      },
      multilineDetection: 'brackets',
    }],
    'import/no-extraneous-dependencies': [
      rules['import/no-extraneous-dependencies'][0],
      {
        ...rules['import/no-extraneous-dependencies'][1],
        devDependencies: [
          ...rules['import/no-extraneous-dependencies'][1].devDependencies,
          '**/vite.config.ts',
          '**/vite.config.*.ts',
        ],
      },
    ],
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
  },
  ignorePatterns: [
    '**/.eslintrc.cjs',
    '**/dist',
  ],
};
