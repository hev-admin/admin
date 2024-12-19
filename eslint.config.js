import antfu from '@antfu/eslint-config'

export default antfu(
  {
    ignores: ['packages/client-vue/**/*', 'packages/client-react/**/*'],
  },
  {
    files: ['packages/server-koa/**/*.js'],
    rules: {
      'no-console': 'off',
    },
  },
)
