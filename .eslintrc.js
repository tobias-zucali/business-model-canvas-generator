module.exports = ({
  parser: 'babel-eslint',
  extends: 'airbnb',
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  plugins: [
    'react',
    'jsx-a11y',
    'react-hooks'
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'arrow-parens': [
      'error',
      'always',
    ],
    'arrow-body-style': [
      'error',
      'as-needed',
    ],
    'class-methods-use-this': 'off',
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'function-paren-newline': 'off',
    'import/imports-first': 'off',
    'import/newline-after-import': 'off',
    'import/no-dynamic-require': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-as-default': 'off',
    'import/no-unresolved': 'warn',
    'import/no-webpack-loader-syntax': 'off',
    'import/prefer-default-export': 'off',
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    'jsx-a11y/anchor-is-valid': ['error', {
      components: ['Link'],
      specialLink: ['to'],
    }],
    'jsx-a11y/aria-props': 'error',
    'jsx-a11y/heading-has-content': 'off',
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/label-has-associated-control': ['error', {
      depth: 5,
    }],
    'jsx-a11y/mouse-events-have-key-events': 'error',
    'jsx-a11y/role-has-required-aria-props': 'error',
    'jsx-a11y/role-supports-aria-props': 'error',
    'lines-between-class-members': ['error', 'always', {
      exceptAfterSingleLine: true,
    }],
    'max-len': 'off',
    'newline-per-chained-call': 'off',
    'no-confusing-arrow': 'off',
    'no-console': 'warn',
    'no-else-return': 'off',
    'no-use-before-define': 'off',
    'object-curly-newline': ['error', {
      ObjectExpression: { multiline: true, consistent: true, minProperties: 4 },
      ObjectPattern: { multiline: true, consistent: true, minProperties: 4 },
      ImportDeclaration: { multiline: true, consistent: true, minProperties: 7 },
      ExportDeclaration: { multiline: true, consistent: true, minProperties: 7 },
    }],
    'operator-linebreak': ['error', 'before'],
    'prefer-template': 'error',
    'react/button-has-type': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-boolean-value': [ 'error', "always"],
    'react/forbid-prop-types': 'off',
    'react/jsx-first-prop-new-line': [
      'error',
      'multiline',
    ],
    'react/jsx-filename-extension': 'off',
    'react/jsx-no-target-blank': 'off',
    'react/no-this-in-sfc': 'off',
    'react/require-default-props': 'off',
    'react/require-extension': 'off',
    'react/self-closing-comp': 'off',
    'require-yield': 'off',
    semi: [
      'error',
      'never',
    ],
    'no-unexpected-multiline': 'error',
    'react-hooks/rules-of-hooks': 'error',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
})
