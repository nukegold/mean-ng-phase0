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
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            },
            sourceMap: false
        })
    ],

    module: {
        loaders: [{
            test: /\.ts$/,
            loaders: [
                'awesome-typescript-loader',
                'angular2-template-loader',
                'angular-router-loader?aot=true&genDir=public/js/app'
            ]
        }]
    }
});
