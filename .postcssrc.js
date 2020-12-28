// // https://github.com/michael-ciniawsky/postcss-load-config
module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', 'ie >= 8']
    },
    'postcss-pxtorem': {
      // 当rootValue: 75 , 样式 width: 750px;height: 1334px;
      // 图片会撑满 iPhone6 屏幕，这个时候切换其他机型，图片也会跟着撑 满。
      rootValue: 37.5,
      propList: ['*']
    }
  }
}
