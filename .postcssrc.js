const { definePostcssConfig } = require('@ttou/define-config')

module.exports = definePostcssConfig({
  plugins: [
    require('@dcloudio/uni-cli-shared').uniPostcssPlugin,
    require('autoprefixer')
  ]
})
