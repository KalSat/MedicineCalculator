'use strict';

let path = require('path');
let webpack = require('webpack');

let HtmlWebpackPlugin = require('html-webpack-plugin');
let OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/main.js'),
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'build.js',
    },
    resolve: {
        extensions: ['.js', '.json', '.css', '.vue'],
        alias: {
            'Vue': './node_modules/vue/dist/vue.js',
            'vue-strap': './node_modules/vue-strap/dist/vue-strap.min.js'
        }
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader?limit=10000&name=/img/[name].[hash:7].[ext]'
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader?limit=10000&name=/fonts/[name].[hash:7].[ext]'
        }]
    },
};

if (process.env.NODE_ENV === 'production') {
    module.exports.plugins = [
        new HtmlWebpackPlugin({
            title: 'Vue Fundamental Demos',
            template: path.resolve(__dirname, './src/index.html'),
            inject: true
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
} else {
    module.exports.devtool = 'eval-source-map'; // 配置生成Source Maps，选择合适的选项

    module.exports.devServer = {
        contentBase: "./build", // 本地服务器所加载的页面所在的目录
        stats: {colors: true},
        historyApiFallback: true, // 不跳转
        inline: true // 实时刷新
    };

    module.exports.plugins = [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        }),
        new HtmlWebpackPlugin({
            title: 'Vue Fundamental Demos',
            template: path.resolve(__dirname, './src/index.html'),
            inject: true
        }),
        new OpenBrowserWebpackPlugin({
            url: 'http://localhost:8080'
        })
    ]
}
