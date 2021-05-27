const {resolve}=require("path");
const pullCss=require("mini-css-extract-plugin");
const htmlPlugin=require("html-webpack-plugin");
const cssmin=require("optimize-css-assets-webpack-plugin");
//上面这个插件可以实现css文件的压缩
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
                use:[
                    pullCss.loader,
                    "css-loader"
                ]
            }
        ]
    },
    plugins:[new htmlPlugin({
        template:"./src/index.html"
    }),new pullCss({
        filename:"css/main.css"
    }),new cssmin()],
    mode:"development"
}