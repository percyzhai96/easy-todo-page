module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 16, // 根字体大小
      propList: ['*'], // 转换所有属性
      exclude: /node_modules/ // 排除node_modules目录
    },
  },
}