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
                use:[
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test:/\.(jpg|gif|png)$/,
                loader:"url-loader",
                options:{
                    limit:8*1024,
                }
            }
        ]
    },
    plugins:[new htmlPlugin({
        template:"./src/index.html",
    })],
    mode:"development",
    devServer:{
        contentBase:resolve(__dirname,"build"),
        compress:true,
        port:3000,
        open:true,
        hot:true
    }
    /*
    HMR的全称是hot module Replacement 中文是热模块替换
    
    开启监听后,只要有一个文件发生改变,整体都刷新了,文件少的时候这样做其实没什么问题
    但是文件一多起来,全部都更新,有可能会影响开发打包构建速度。
    HMR就是解决这个问题的
    只要在对象devServer增加一个字段hot即可开启HMR
    但是各个文件对HMR的支持情况不同
    css文件:支持HMR
    HTML文件:不支持HMR
    JS文件:默认不支持HMR,需要写支持HMR的语句
    */
}