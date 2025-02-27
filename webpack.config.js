const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx", // Главный файл TypeScript
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    mode: process.env.NODE_ENV || "development",
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/, // Обрабатываем TypeScript
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.scss$/, // Обрабатываем SCSS
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"] // Позволяет импортировать файлы без указания расширений
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ],
    devServer: {
        static: path.join(__dirname, "dist"),
        compress: true,
        port: 3000,
        hot: true
    }
};
