/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    'plugin:import/recommended',
    'plugin:import/typescript'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    'consistent-return': 'error',
    'no-fallthrough': 'error',
    'no-multi-spaces': 'error',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: 'vue',
            group: 'external',
            position: 'before'
          },
          {
            pattern: 'vue-*',
            group: 'external',
            position: 'before'
          },
          {
            pattern: 'element-plus/**',
            group: 'external',
            position: 'after'
          },
          {
            pattern: '@/components/**',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@/composables/**',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@/utils/**',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@/{api,APIs,services}/**',
            group: 'internal',
            position: 'after'
          },
          {
            pattern: '@/constants/**',
            group: 'internal',
            position: 'after'
          },
          {
            pattern: '@/stores/**',
            group: 'internal',
            position: 'after'
          },
          {
            pattern: '@/types/**',
            group: 'internal',
            position: 'after'
          },
          {
            pattern: '@/**',
            group: 'internal',
            position: 'after'
          }
        ],
        pathGroupsExcludedImportTypes: ['type'],
        warnOnUnassignedImports: true,
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ]
  },
  settings: {
    'import/core-modules': ['vue-router/auto-routes', 'virtual:generated-layouts'],
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.app.json'
      }
    }
  }
}
