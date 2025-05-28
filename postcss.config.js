module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 37.5, // 设计稿尺寸为 375px
      propList: ['*'],
    },
  },
}