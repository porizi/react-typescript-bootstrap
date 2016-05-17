var webpack = require('webpack');

module.exports = {
    context: __dirname + "/src",
    entry: {
        app: "./index"
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].bundle.js"
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            {
                test: /\.jsx$/,
                loader: 'jsx-loader?insertPragma=React.DOM&harmony'
            }
        ]
    }
};
