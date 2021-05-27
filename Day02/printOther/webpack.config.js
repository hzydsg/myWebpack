const {resolve}=require("path");
const htmlPlugin=require("html-webpack-plugin");
module.exports={
    entry:"./src/js/index.js",
    output:{
        filename:"built.js",
        path:resolve(__dirname,"build")
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:["style-loader","css-loader"]
            },
            {
                test:/\.(img|jpg|gif)/,
                loader:"url-loader",
                options:{
                    limit:8*1024
                }
            }
            
        ]
    },
    plugins:[new htmlPlugin({
        template:"./src/index.html"
    })],
    mode:"development"
}