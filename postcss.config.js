const autoprefixer = require('autoprefixer')
const { uniPostcssPlugin } = require('@dcloudio/uni-cli-shared')

module.exports = {
  plugins: [uniPostcssPlugin(), autoprefixer()]
}
