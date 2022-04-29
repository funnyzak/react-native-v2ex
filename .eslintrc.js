module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-native', '@typescript-eslint'],
  extends: ['@react-native-community', 'prettier'],
  globals: {
    window: true
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-undef': 'off',
        // 代码长度
        'max-len': ['error', { code: 200, ignoreComments: true, ignoreUrls: true, ignoreTemplateLiterals: true }],
        'semi': ['error', 'never'],
        'comma-dangle': ['error', 'never'],
        'import/no-unresolved': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-console': 'warn',
        'no-debugger': 'error',
        'no-plusplus': 'off',
        'camelcase': 'off',
        'import/extensions': 'off',
        'no-use-before-define': 'off',
        'no-var-requires': 'off',
        'import/no-commonjs': 'off',
        'no-continue': 'off',
        'no-param-reassign': 'off',
        // 控制逗号前后的空格
        'comma-spacing': [2, { before: false, after: true }],
        // 控制逗号在行尾出现还是在行首出现
        // http://eslint.org/docs/rules/comma-style
        'comma-style': [2, 'last'],
        // 圈复杂度
        'complexity': [2, 24],
        // 文件末尾强制换行
        'eol-last': 2,
        // 方法表达式是否需要命名
        'func-names': 0,
        'no-alert': 0, //禁止使用alert confirm prompt
        'no-array-constructor': 2, //禁止使用数组构造器
        'no-bitwise': 0, //禁止使用按位运算符
        'no-caller': 1, //禁止使用arguments.caller或arguments.callee
        'no-catch-shadow': 2, //禁止catch子句参数与外部作用域变量同名
        'no-class-assign': 2, //禁止给类赋值
        'no-cond-assign': 2, //禁止在条件表达式中使用赋值语句
        'no-const-assign': 2, //禁止修改const声明的变量
        'no-constant-condition': 2, //禁止在条件中使用常量表达式 if(true) if(1)
        'no-dupe-keys': 2, //在创建对象字面量时不允许键重复 {a:1,a:1}
        'no-dupe-args': 2, //函数参数不能重复
        'no-duplicate-case': 2, //switch中的case标签不能重复
        'no-else-return': 2, //如果if语句里面有return,后面不能跟else语句
        'quote-props': ['warn', 'consistent'],
        // 定义未使用
        'no-unused-vars': 'off',
        // 禁止使用 for..in  for..of
        'no-restricted-syntax': 1,
        // 禁止标识符下划线
        'no-underscore-dangle': 'off',
        // 导入多次
        'import/no-duplicates': 0,
        'import/prefer-default-export': 0,
        // 禁止promise 使用async
        'no-async-promise-executor': 0,
        // image元素必须有alt标签
        'jsx-a11y/alt-text': 0,
        // 变量作用域
        'no-shadow': 'off',
        // 不允许嵌套的三元表达式
        'no-nested-ternary': 'off',
        'no-await-in-loop': 'off',
        // 对象/数组 解构
        'prefer-destructuring': [
          'error',
          {
            array: true,
            object: true
          },
          {
            enforceForRenamedProperties: false
          }
        ],
        'prettier/prettier': [
          'error',
          {
            endOfLine: 'auto'
          }
        ],
        '@typescript-eslint/no-unused-vars': 'off',
        'react-hooks/exhaustive-deps': 'warn',
        'react-native/no-unused-styles': 2,
        'react-native/split-platform-components': 2,
        'react-native/no-inline-styles': 'warn',
        'react-native/no-color-literals': 2,
        'react-native/no-raw-text': 0,
        'react-native/no-single-element-style-arrays': 2
      }
    }
  ]
}
