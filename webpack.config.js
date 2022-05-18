const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: './src/index.tsx', // our entry point, as mentioned earlier
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/, // matches .js, .ts, and .tsx files
                loader: 'babel-loader', // uses babel-loader for the specified file types (no ts-loader needed)
                exclude: /node_modules/, 
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader", "postcss-loader",
                ],
            },
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: ['@svgr/webpack'],
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js', // our output bundle
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist/')
        },
        port: 3000,
        devMiddleware :{
            publicPath: '/',
        },
        hot: "only",
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), 
        new MiniCssExtractPlugin({
            filename: "bundle.css",
            chunkFilename: "[id].css"
        }),
        new HtmlWebpackPlugin({
            title: 'DEPT code challenge',
            template: './src/assets/index.template.html',
            favicon: './src/assets/favicon.svg',
            inject: 'body',
        })
    ],
    devtool: 'eval-source-map', // builds high quality source maps
}