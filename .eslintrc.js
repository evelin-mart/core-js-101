module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    mocha: true,
  },
  extends: ['airbnb-base'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'linebreak-style': 0,
    'no-param-reassign': 0,
    'no-unused-vars': 0,
    'no-unused-expressions': 0,
    'no-nested-ternary': 0,
    'no-confusing-arrow': 0,
    'implicit-arrow-linebreak': 0,
    'indent': 0,
    'comma-dangle': 0,
    'function-paren-newline': 0
  },
};
