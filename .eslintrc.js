module.exports = {
  root: true,
  env: {
    es6: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'standard'
  ],
  rules: {
    /** 2空格 */
    indent: [
      'error',
      2
    ],
    /** 智能模式控制==和=== */
    eqeqeq: ['error', 'smart'],
    /** 关闭空行限制 */
    'padded-blocks': 0,
    /** 函数名限制 */
    'func-names': ['error', 'as-needed']
  }
}
