module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['google', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-native'],
  rules: {
    'no-console': 0,
    // 'prettier/prettier': [
    //   'error',
    //   {
    //     trailingComma: 'es5',
    //     singleQuote: true,
    //     printWidth: 80,
    //     // below line only for windows users facing CLRF and eslint/prettier error
    //     // non windows users feel free to delete it
    //     endOfLine: 'auto',
    //   },
    // ],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react-native/no-inline-styles': 2,
    'require-jsdoc': 0,
  },
};
