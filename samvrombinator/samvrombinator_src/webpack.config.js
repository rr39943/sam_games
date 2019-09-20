const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
        mode: 'development',
        entry: {
            index: ['./src/jeu.js',
                    './src/style.less']
        },
        output: {
            filename: 'game.js',
            path: path.resolve(__dirname, '../static/samvrombinator/js')
        },
        module: {
            rules: [{
                    test: /\.js$/,
                    exclude: [/node_modules/, /^js$/],
                    loader: 'babel-loader'
                },
                {

                    test: /\.less$/,
                    exclude: /node_modules/,
                    use: [MiniCssExtractPlugin.loader,
                          'css-loader',
                          'less-loader']}


                ],
            },
            plugins: [new MiniCssExtractPlugin({
            filename: "../css/game.css"
        })]
        };
