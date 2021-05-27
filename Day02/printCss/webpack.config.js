const {resolve}=require("path");
const htmlPlugin=require("html-webpack-plugin");
const pullCss=require("mini-css-extract-plugin");
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
                use:[pullCss.loader,"css-loader"]
            }
        ]
    },
    plugins:[new htmlPlugin({
        template:"./src/index.html"
    }),new pullCss({
        filename:"css/main.css"
    })],
    mode:"development"
    /*
    想要把CSS样式从js文件提取出来单独成一个文件的话,需要去下载一个插件

    */
}