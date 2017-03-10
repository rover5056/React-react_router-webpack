var path = require('path');
var webpack = require('webpack');
var Visualizer = require('webpack-visualizer-plugin');


module.exports = {
    devtool: false,
    entry: path.resolve(__dirname, './index.js'),

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js', // Template based on keys in entry above
        chunkFilename: "[name].min.js",
        publicPath: "/dist/"
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(true),
        new webpack.optimize.DedupePlugin()
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            },
        }),
        new webpack.optimize.UglifyJsPlugin({
        output: {
            comments: false, // remove all comments
        },
            compress: {
                warnings: false
            }
        })
        new Visualizer()
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader?presets[]=es2015&presets[]=react'
        }, {
            test: /\.less$/,
            exclude: [/node_modules/],
            loader: 'Style!css?modules&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:5]!less'
        }, {
            test: /\.css/,
            exclude: [/node_modules/],
            loader: 'Style!css?modules&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:5]'
        }, {
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
            exclude: [/node_modules/],
            loader: 'url-loader?limit=8192&name=build/[name].[ext]'
        }]
    },

    resolve: {
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['', '.js', '.jsx']
    }

};