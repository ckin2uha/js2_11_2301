let HTMLPlugin = require ('html-webpack-plugin')
let path = require ('path')
module.exports = {
    devServer:{
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8080
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ]
    },
    plugins: [
        new HTMLPlugin ({
            template: './src/public/index.html'
        })
    ]
}