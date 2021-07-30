const path = require('path');
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    resolve: {
        modules: [path.resolve(__dirname, './src'), 'node_modules'],
        extensions: ['.js', '.jsx', '.json']
    },
    plugins: [
        /**
         * All files inside webpack's output.path directory will be removed once, but the
         * directory itself will not be. If using webpack 4+'s default configuration,
         * everything under <PROJECT_DIR>/dist/ will be removed.
         * Use cleanOnceBeforeBuildPatterns to override this behavior.
         *
         * During rebuilds, all webpack assets that are not used anymore
         * will be removed automatically.
         *
         * See `Options and Defaults` for information
         */
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin(),
    ],

    module: {
        rules: [
            {
                test: '/\\.js|\\.jsx$/',
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader"
                },
            },
            {
                test: /\.(scss|sass)$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },

            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            }
        ]
    }
};

module.exports = process.env.NODE_ENV === 'development'
    ? require('./webpack.config.dev')
    : require('./webpack.config.prod');
