var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './app.js'),
    output: {
        path: __dirname,
        filename: 'bundle.js',
    },
};