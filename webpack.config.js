const path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: './src/App.jsx',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'react-hot-loader',
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'react']
                        }
                    }
                ]
            }
        ]
    },

    devServer:{
        proxy:{
            "/api":"http://localhost:3000"
        }
    },

    devtool: 'cheap-eval-source-map',
    plugins: [
        new OpenBrowserPlugin({ url: 'http://localhost:8080' })
    ],
    
    resolve: {
        extensions: ['.js', '.jsx', '.json', '*']
    }
};