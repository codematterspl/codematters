const path = require('path')

module.exports = {
    assetsDir: 'static',
    configureWebpack: () => {
        return {
            output: {
                filename: '[name].[hash].js',
                chunkFilename: '[name].[hash].js'
            },
            resolve: {
                alias: {
                    css: path.join(__dirname, 'src/assets/css'),
                    fonts: path.join(__dirname, 'src/assets/fonts'),
                    images: path.join(__dirname, 'src/assets/images')
                }
            }
        }
    }
}
