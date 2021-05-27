const {resolve}=require("path");
const pullCss=require("mini-css-extract-plugin");
const htmlPlugin=require("html-webpack-plugin");
const cssmin=require("optimize-css-assets-webpack-plugin");
/*
使用tree shaking的条件
1.使用ES6模块化(注意是所有模块)
2.开启production模式
*/
/*
在package.json里写入"sideEffects",值为false,代表无副作用(所有文件均可tree shaking,前面的是js文件无tree shaking)
*/
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