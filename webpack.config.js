'use strict'

let path = require('path')
let webpack = require('webpack')

let HtmlWebpackPlugin = require('html-webpack-plugin')
let OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin')
let ExtractTextPlugin = require('extract-text-webpack-plugin')
let OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
let FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
let CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, './src/ui/main.ts'),
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'build.js'
    },
    resolve: {
        extensions: ['.ts', '.js', '.json', '.css', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.js',
            'vue-router$': 'vue-router/dist/vue-router.common.js'
        }
    },
    module: {
        loaders: [{
            test: /\.(tsx?|vue)$/,
            loader: 'tslint-loader',
            enforce: 'pre',
            exclude: /node_modules/,
            include: ['./src', './test'],
        }, {
            test: /\.css$/,
            use: process.env.NODE_ENV === 'production' ?
                ExtractTextPlugin.extract({
                    use: {
                        loader: 'css-loader',
                        options: {
                            minimize: true,
                            sourceMap: true
                        }
                    },
                    fallback: 'vue-style-loader'
                }) : ['vue-style-loader', {
                    loader: 'css-loader',
                    options: {
                        minimize: false,
                        sourceMap: false
                    }
                }]
        }, {
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
            options: {
                appendTsSuffixTo: [/\.vue$/],
            }
        }, {
            test: /\.vue$/,
            loader: 'vue-loader',
            exclude: /node_modules/,
            options: {
                esModule: true
            }
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader?limit=10000&name=img.[name].[hash:7].[ext]'
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader?limit=10000&name=fonts.[name].[hash:7].[ext]'
        }]
    }
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'

    module.exports.output = {
        path: path.resolve(__dirname, './build'),
        filename: 'js/[name].[chunkhash:7].js',
        chunkFilename: 'js/[id].[chunkhash:7].js'
    }

    module.exports.plugins = [
        // http://vuejs.github.io/vue-loader/en/workflow/production.html
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: true
        }),
        // extract css into its own file
        new ExtractTextPlugin({
            filename: 'css/[name].[contenthash:7].css'
        }),
        // Compress extracted CSS. We are using this plugin so that possible
        // duplicated CSS from different components can be deduped.
        new OptimizeCSSPlugin({
            cssProcessorOptions: {
                safe: true
            }
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        // generate dist index.html with correct asset hash for caching.
        // you can customize output by editing /index.html
        // see https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
                // more options:
                // https://github.com/kangax/html-minifier#options-quick-reference
            },
            // necessary to consistently work with multiple chunks via CommonsChunkPlugin
            chunksSortMode: 'dependency'
        }),
        // split vendor js into its own file
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module, count) {
                // any required modules inside node_modules are extracted to vendor
                return (
                    module.resource &&
                    /\.js$/.test(module.resource) &&
                    module.resource.indexOf(
                        path.join(__dirname, '../node_modules')
                    ) === 0
                )
            }
        }),
        // extract webpack runtime and module manifest to its own file in order to
        // prevent vendor hash from being updated whenever app bundle is updated
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            chunks: ['vendor']
        }),
        new CleanWebpackPlugin('build/*')
    ]
} else {
    // cheap-module-eval-source-map is faster for development
    module.exports.devtool = '#cheap-module-eval-source-map'

    module.exports.devServer = {
        contentBase: './build', // 本地服务器所加载的页面所在的目录
        stats: {colors: true},
        historyApiFallback: true, // 不跳转
        inline: true // 实时刷新
    }

    module.exports.plugins = [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        }),
        // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            inject: true
        }),
        new FriendlyErrorsPlugin(),
        new OpenBrowserWebpackPlugin({
            url: 'http://localhost:8080'
        })
    ]
}
