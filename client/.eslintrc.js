module.exports = {
  extends: [
    '../.eslintrc.js',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/jsx-curly-spacing': [
      'error',
      { when: 'always', allowMultiline: false },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
