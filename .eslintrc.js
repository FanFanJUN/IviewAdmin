// module.exports = {
//   root: true,
//   'extends': [
//     'plugin:vue/essential',
//     '@vue/standard'
//   ],
//   rules: {
//     // allow async-await
//     'generator-star-spacing': 'off',
//     // allow debugger during development
//     'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
//     'vue/no-parsing-error': [2, {
//       'x-invalid-end-tag': false
//     }],
//     'no-undef': 'off',
//     'camelcase': 'off'
//   },
//   parserOptions: {
//     parser: 'babel-eslint'
//   }
// }
// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-new': 0,
    "no-cond-assign": 0,
    "no-duplicate-case": 2, //switch语句中不允许出现重复的case标签
    "no-regex-spaces": 2, //正则表达式中不允许出现多个连续空格
    "no-unreachable": 2, //在return，throw，continue，break语句后不允许出现不可能到达的语句
    "use-isnan": 2, //要求检查NaN的时候使用isNaN()
    "default-case": 0, //在switch语句中需要有default语句
    "eqeqeq": ["error", "smart"], //比较的时候使用严格等于
    "no-else-return": 0, //如果if语句有return，else里的return不用放在else里
    "no-extend-native": 2, //不允许扩展原生对象
    // "no-undef-init": 2, //不允许初始化变量时给变量赋值undefined
    // "no-undefined": 2, //不允许把undefined当做标识符使用
    "no-mixed-spaces-and-tabs": [2, "smart-tabs"], //不允许混用tab和空格
    // "no-unused-vars": [1, {"vars": "all", "args": "after-used"}], //不允许有声明后未使用的变量或者参数
    "no-unused-vars": "off",
    "brace-style": [1, "1tbs", { "allowSingleLine": false}], //大括号风格
    // "camelcase": [1, {"properties": "never"}], //强制驼峰命名规则
    "no-multiple-empty-lines": [1, {"max": 3}], //空行最多不能超过两行
    "quotes": [1, "single", "avoid-escape"], //引号风格
    "comma-spacing": [1, { "before": false, "after": true }],//逗号前后的空格限制
    "semi": [2, "always"], //强制语句分号结尾
    "indent": ["error", 2],
    "vue/no-parsing-error": [2, { "x-invalid-end-tag": false }]//vue将标签渲染为原生html标签时，由于这些标
  }
}
