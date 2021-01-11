module.exports = {
  'env': {
    'es2021': true,
    'node': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
    'prettier',
    'prettier/react',
  ],
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaVersion': 2020,
    'ecmaFeatures': {
      'impliedStrict': true,
      'jsx': true,
    },
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    'react-native',
    'prettier',
  ],
  'rules': {
    'no-console': 0,
    'require-jsdoc': 0,
  },
};
