//entry -> output

const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/

        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map', //To configure source maps (know in which file error occured instead of in bundle.js file)
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true            //Router config for client side routing
    }
};
