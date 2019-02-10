const path = require('path');
module.exports = {
    mode: "development",
    entry: './public/js/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    resolve:{
        extensions:['.js','.jsx']
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