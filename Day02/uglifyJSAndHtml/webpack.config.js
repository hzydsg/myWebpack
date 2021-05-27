const {resolve}=require("path");
const pullCss=require("mini-css-extract-plugin");
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
                use:[
                    pullCss.loader,
                    "css-loader"
                ]
            }
        ]
    },
    plugins:[new htmlPlugin({
        template:"./src/index.html",
        minify:{
            collapseWhitespace:true,
            removeComments:true
        }
        /*
        这个可以压缩HTML代码
        */
    }),new pullCss({
        filename:"css/main.css"
    })],
    mode:"production"
    /*
    使用生产模式会压缩JS代码
    */
}