
module.exports = {
    
    entry: __dirname + "/src",
    output: {
        filename: "bundle.js",
        path: "/"
    }, 
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                query: {
                    presets: [
                        'es2015', 'react'
                    ]
                }
            }
        ]
    }
};

