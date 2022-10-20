const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    stats: { children: true },
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'index.bundle.js',
    },
    mode: process.env.NODE_ENV || 'development',
    resolve: { modules: [path.resolve(__dirname, 'src'), 'node_modules'] },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public/'),
        },
        port: 3000,
        devMiddleware: {
            publicPath: 'https://localhost:3000/dist/',
        },
        hot: 'only',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(css|scss)$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ['file-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
        }),
    ],
}
