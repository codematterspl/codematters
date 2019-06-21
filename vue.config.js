const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    assetsDir: 'static',
    configureWebpack: () => {
        return {
            output: {
                filename: '[name].[hash].js',
                chunkFilename: '[name].[hash].js'
            },
            plugins: [
                new HtmlWebpackPlugin({
                    template: 'public/index.html'
                })
            ],
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
