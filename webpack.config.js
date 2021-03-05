module.exports = {
    mode: 'development',
    entry: './client.js',
    output: {
        path: __dirname + './deploy',
        filename: 'app.js'
    },
    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.js$/, loader: 'babel-core', exclude: /node_modules/}
        ]
    }
};