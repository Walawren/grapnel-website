const path = require("path");
const webpack = require("webpack");

webEntryPoints = {
    main: ['./src/Walawren.Grappnel.Website/content/js/index.js']
}

module.exports = {

    entry: webEntryPoints,

    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader",
                exclude: /(\/node_modules\/|test\.js|\.spec\.js$)/
            }
        ]
    },

    output: {
        path: path.join(__dirname, 'src/Walawren.Grappnel.Website/wwwroot'),
        publicPath: '/wwwroot/',
        filename: '[name].js'
    },

    resolve: {
        extensions: [".js"],
        modules: [
            __dirname,
            path.resolve(__dirname, "./node_modules")
        ]
    }

};