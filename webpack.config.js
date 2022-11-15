const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/scripts/index.js',
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[hash][ext][query]'
                }
            },
            {
                test: /\.(webp)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/display/[hash][ext][query]'
                }
            },
            // {
            //     test: /\.webp/i,
            //     use: 'webp-loader'
            // },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[hash][ext][query]'
                }
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Lotus - Indian Cusine Restaurant',
            template: './src/main.html',
            filename: 'index.html',
            inject: 'body'
        })
    ],
    devtool: 'source-map',
    devServer: {
        static: './dist',
    },
    optimization: {
        splitChunks: { chunks: "all" },
    },
}