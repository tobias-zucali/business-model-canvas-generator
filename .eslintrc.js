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
      2,
      'as-needed',
    ],
    'class-methods-use-this': 0,
    'comma-dangle': [
      2,
      'always-multiline',
    ],
    'function-paren-newline': 0,
    'import/imports-first': 0,
    'import/newline-after-import': 0,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 1,
    'import/no-webpack-loader-syntax': 0,
    'import/prefer-default-export': 0,
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],
    'jsx-a11y/anchor-is-valid': ['error', {
      components: ['Link'],
      specialLink: ['to'],
    }],
    'jsx-a11y/aria-props': 2,
    'jsx-a11y/heading-has-content': 0,
    'jsx-a11y/href-no-hash': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/label-has-associated-control': ['error', {
      depth: 5,
    }],
    'jsx-a11y/mouse-events-have-key-events': 2,
    'jsx-a11y/role-has-required-aria-props': 2,
    'jsx-a11y/role-supports-aria-props': 2,
    'lines-between-class-members': ['error', 'always', {
      exceptAfterSingleLine: true,
    }],
    'max-len': 0,
    'newline-per-chained-call': 0,
    'no-confusing-arrow': 0,
    'no-console': 1,
    'no-else-return': 'off',
    'no-use-before-define': 0,
    'object-curly-newline': ['error', {
      ObjectExpression: { multiline: true, consistent: true, minProperties: 4 },
      ObjectPattern: { multiline: true, consistent: true, minProperties: 4 },
      ImportDeclaration: { multiline: true, consistent: true, minProperties: 7 },
      ExportDeclaration: { multiline: true, consistent: true, minProperties: 7 },
    }],
    'operator-linebreak': ['error', 'before'],
    'prefer-template': 2,
    'react/button-has-type': 0,
    'react/destructuring-assignment': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-first-prop-new-line': [
      2,
      'multiline',
    ],
    'react/jsx-filename-extension': 0,
    'react/jsx-no-target-blank': 0,
    'react/no-this-in-sfc': 'off',
    'react/require-default-props': 0,
    'react/require-extension': 0,
    'react/self-closing-comp': 0,
    'require-yield': 0,
    semi: [
      2,
      'never',
    ],
    'no-unexpected-multiline': 2,
    'react-hooks/rules-of-hooks': 2,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
})
