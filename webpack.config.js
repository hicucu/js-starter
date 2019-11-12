const path = require('path');
//const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // css 분리

module.exports = {
    // entry files
    entry: ['@babel/polyfill', './src/js/main.js', './src/sass/main.scss'],
    // 컴파일 + 번들링된 js 파일이 저장될 경로와 이름 지정
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    /*
        //css 분리
        plugins: [
            // 컴파일 + 번들링 CSS 파일이 저장될 경로와 이름 지정
            new MiniCssExtractPlugin({
                filename: 'css/style.css'
            })
        ],
    */
    module: {
        rules: [{
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src/js')
                ],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // CSS 분리X
                    //MiniCssExtractPlugin.loader,    // css 분리
                    'css-loader',
                    //'sass-loader',  // css 분리X
                    'sass-loader?outputStyle=expanded' // css 분리                    
                ],
                exclude: /node_modules/
            }
        ]
    },
    devtool: 'source-map',
    // https://webpack.js.org/concepts/mode/#mode-development
    mode: 'development'
};
