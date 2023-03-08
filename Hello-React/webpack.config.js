const path = require("path");

module.exports={
    entry: './src/app.js',
    output: {
        path:path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    devServer:{
        static:{
            directory: path.join(__dirname,'dist')
        }
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader: 'babel-loader',//Babel.congfig.json  içerisinde jsx kodlarını js koduna çevirecek paketler verilmiştir
                exclude:/node_modules/
            },
            {
                test:/\.scss/,//Regular expression ->> 
                use:[
                    'style-loader',
                     'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require("sass")
                        }
                    }
                    ]//Projede css dosyalarını çözümleyecek paketler
            },
        ]
    }
}