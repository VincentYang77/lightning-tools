const webpack = require('webpack')
const path = require('path')

const pkg = require('../package.json')

const rootPath = path.resolve(__dirname, '../')

const config = {
    entry: path.resolve(rootPath, 'src', 'index.js'),
    output: {
        filename: 'index.js',
        path: path.resolve(rootPath, 'dist'),
        library: `${pkg.name}`,
        libraryTarget: "commonjs2"
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: "babel-loader"
        }]
    },
    plugins: []
}

module.exports = config