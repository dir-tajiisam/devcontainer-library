// https://eslint.style/guide/config-presets#static-configurations
const stylistic = require('@stylistic/eslint-plugin');

const customized = stylistic.configs.customize({
  // the following options are the default values
  indent: 2,
  quotes: 'single',
  semi: true,
  jsx: true,
  // ...
});

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@stylistic/recommended-extends',
    'plugin:jest/recommended',
  ],
  // overrides: [
  //   {
  //     env: { node: true },
  //     files: ['.eslintrc.{js,cjs}'],
  //     parserOptions: { sourceType: 'script' },
  //   },
  // ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@stylistic',
    'jest',
    'react',
    '@typescript-eslint',
    'unused-imports',
    'import',
    'prefer-arrow',

  ],
  // https://eslint.style/packages/default#rules
  rules: {
    ...customized.rules,
    '@stylistic/member-delimiter-style': ['error', {
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
    '@stylistic/comma-dangle': ['error', 'always-multiline'],
    '@stylistic/multiline-ternary': 'off',
    '@stylistic/jsx-one-expression-per-line': 'off',
    // 使用していないimportをエラー（にして削除）
    'unused-imports/no-unused-imports': 'error',
    // default propsの設定を強制（をやめる）
    'react/require-default-props': 'off',
    // import のソート順
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'object', 'type'],
        pathGroups: [
          {
            pattern: '@alias/**',
            group: 'parent',
            position: 'before',
          },
        ],
        alphabetize: {
          order: 'asc',
        },
      },
    ],
    // import 後の空行
    'import/newline-after-import': 'error',
    // 区切りの空行を入れるルール.return文の前に入れるように設定
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
    ],
    // 未定義変数仕様の禁止ルール。_のみ許可
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'after-used',
        argsIgnorePattern: '_',
        ignoreRestSiblings: false,
        varsIgnorePattern: '_',
      },
    ],
    // アロー関数の強制
    'react/function-component-definition': ['error', { namedComponents: 'arrow-function' }],
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      },
    ],
  },
};
