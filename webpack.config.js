const path = require('path');
module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, './public/main.js'),
    output: {
        path: path.resolve(__dirname, './public/output'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { 
                test: /\.(js|jsx)$/, 
                use: 'babel-loader', 
                exclude: /node_modules/ 
            }
        ]
    }
}