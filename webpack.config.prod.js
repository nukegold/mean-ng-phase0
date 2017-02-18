const ngToolsWebpack = require('@ngtools/webpack');

var webpack = require('webpack');

var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.config.common.js');

module.exports = webpackMerge.smart(commonConfig, {
    entry: './assets/app/main.aot.ts',

    output: {
        path: './public/js/app',
        filename: 'bundle.js',
        publicPath: 'js/app/',
        chunkFilename: '[id].[hash].chunk.js'
    },

    plugins: [
        new ngToolsWebpack.AotPlugin({
            tsConfigPath: './tsconfig.aot.json',
            entryModule: __dirname + '/assets/app/app.module#AppModule'
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            },
            sourceMap: true
        })
    ],

    module: {
        loaders: [{
            test: /\.ts$/,
            loader: '@ngtools/webpack'
        }]
    }
});