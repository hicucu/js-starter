module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jquery: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  plugins: ['import', 'html'],
  rules: {
    // 0 "off", 1 "warn" 2 "error"
    'no-var': 2,
    'no-console': 'warn',
    quotes: ['error', 'single'],
    'no-underscore-dangle': 'warn',
    'no-plusplus': ['error', {
      allowForLoopAfterthoughts: true
    }],
    'comma-dangle': ['error', 'never'],
    'no-nested-ternary': 0,
    'func-names': 0,
    'prefer-template': 0,
    'no-underscore-dangle': 0,
    'no-useless-return': 0,
    'class-methods-use-this': 1,
    'endOfLine': 0,
    'omma-dangle': 0,
    "prettier/prettier": 0,
    "spaced-comment": 0
  },
};