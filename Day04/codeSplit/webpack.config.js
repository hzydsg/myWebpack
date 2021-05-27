const {resolve}=require("path");
const htmlPlugin=require("html-webpack-plugin");
module.exports={
    entry:{
        main1:"./src/js/main1.js",
        main2:"./src/js/main2.js"
    },
    output:{
        filename:"js/[name].js",
        path:resolve(__dirname,"build")
    },
    module:{
        rules:[

        ]
    },
    plugins:[new htmlPlugin({
        template:"./src/index.html",
        minify:{
            removeComments:true,
            collapseWhitespace:true
        }
    })],
    mode:"production",
    optimization:{
        splitChunks:{
            chunks:"all"
        }
    }
}