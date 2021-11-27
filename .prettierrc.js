/**
 *@description 使编辑器或者其他工具知道项目正在使用Prettier
 */
module.exports = {
  // 一般情况下 80 | 100 | 120 建议不要超过80
  printWidth: 80, // https://prettier.io/docs/en/options.html#print-width
  // 缩进级别的空格数
  tabWidth: 2, // https://prettier.io/docs/en/options.html#tab-width
  // 空格缩进行
  useTabs: false, // https://prettier.io/docs/en/options.html#tabs
  // 在语句末尾打印分号
  semi: true, // https://prettier.io/docs/en/options.html#semicolons
  // 推荐使用单引号
  singleQuote: true, // https://prettier.io/docs/en/options.html#quotes
  // 是否有尾随逗号 v2.0.0 中的默认值从 更改none为es5
  trailingComma: 'es5', // https://prettier.io/docs/en/options.html#trailing-commas
  // 在对象文字中的括号之间打印空格
  bracketSpacing: true, // https://prettier.io/docs/en/options.html#bracket-spacing
  // 括号线 采用默认值 false
  bracketSameLine: false, // https://prettier.io/docs/en/options.html#bracket-line
  jsxBracketSameLine: false, // 已经弃用  此选项已在 v2.4.0 中弃用，请改用 --bracket-same-line
  // 箭头函数括号
  arrowParens: 'always', // (x) => x // https://prettier.io/docs/en/options.html#arrow-function-parentheses
};
