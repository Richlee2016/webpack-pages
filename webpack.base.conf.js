const { resolve } = require('path');
const glob = require('glob');
var HtmlWebpackPlugin = require('html-webpack-plugin')

const r = (...arg) => resolve(__dirname, ...arg);
const jsFile = glob.sync(r('./src/entry', './**/*.js'));
const reg = /G:\/A\/webpack\/src\/(.*).js/
const keyArr = jsFile.map(o => o.match(reg)[1]);

let entryBox = {};
for (var i = 0; i < jsFile.length; i++) {
    entryBox[keyArr[i]] = jsFile[i];
}



module.exports = {
    entry: entryBox,
    output: {
        path: r("./dist"),
        filename: '[name].js',
        publicPath: "/"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App',
            filename: 'view/one.html',
            chunks: ['entry/one'],
        }),
        new HtmlWebpackPlugin({
            title: 'My App',
            filename: 'view/two.html',
            chunks: ['entry/two']
        }),
    ]
}