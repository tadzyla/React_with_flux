module.exports = {
    mode: 'development',
    entry: './client.js',
    output: {
        path: __dirname + '/deploy',
        filename: 'app.js'
    },
    module: {
        rules: [
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/}        ]
    },
    watch: true
};