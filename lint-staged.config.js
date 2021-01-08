module.exports = {
  '*.{ts,tsx}': 'eslint --fix',
  '*.{css,scss,vue}': 'stylelint --fix',
  '*': 'prettier -w -u',
};
