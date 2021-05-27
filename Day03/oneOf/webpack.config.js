const {resolve}=require("path");
const pullCss=require("mini-css-extract-plugin");
const htmlPlugin=require("html-webpack-plugin");
const cssmin=require("optimize-css-assets-webpack-plugin");
module.exports={
    entry:"./src/js/index.js",
    output:{
        filename:"built.js",
        path:resolve(__dirname,"build")
    },
    module:{
        rules:[{oneOf:[
            {
                test:/\.(png|gif|jpg)$/,
                loader:"url-loader",
                
            },{
                test:/\.css$/,
                use:[
                    pullCss.loader,
                    "css-loader"
                ]
            } 
        ]}]
    },
    plugins:[new htmlPlugin({
        template:"./src/index.html",
        minify:{
            collapseWhitespace:true,
            removeComments:true
        }
    }),new cssmin({
    }),new pullCss({
        filename:"css/main.css"
    })],
    mode:"production",
    devServer:{
        contentBase:resolve(__dirname,"build"),
        compress:true,
        port:3000,
        open:true
    }
    /*
    像上面这样写,每一个文件都会被多个loader执行多遍,
    这样在实际生产环境效率,这个时候可以利用oneof解决,可以利用它进行生产环境
    的优化
    */
}