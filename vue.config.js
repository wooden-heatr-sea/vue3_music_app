// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })



module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        //引入全局变量 和 mixin
        additionalData: `
        @import "@/assets/scss/variable.scss";
        @import "@/assets/scss/mixin.scss";
        `
      }
    }
  }
}