/**
 * @name: vue.config
 * @author: chuanchuan
 * @date: 2022-03-31 16:26
 * @description：vue.config
 * @update: 2022-03-31 16:26
 */

const px2rem = require('postcss-px2rem');

module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          px2rem({
            remUnit: 37.5,
          }),
        ],
      },
    },
  },
};
