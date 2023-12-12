const path = require('path');
module.exports = {
    entry: `./src/main.ts`,
    target: 'node',
    externals: [
        /^[a-z\-0-9]+$/ // Ignore node_modules folder
    ],
    output: {
        filename: 'api.js', // output file
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: "commonjs"
    },
    resolve: {
        // Add in `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            'node_modules'
        ]
    },
    resolveLoader: {
        //root: [`${root}/node_modules`],


    },
    module: {
        rules: [{
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            test: /\.ts$/,
            use: [
                {
                    loader: 'ts-loader',
                }
            ]
        }]
    },
    mode: 'production'
};