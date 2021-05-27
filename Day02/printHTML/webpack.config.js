/*
loader的使用步骤:
1.下载
2.使用

plugin的使用步骤:
1.下载
2.引入
3.使用

这里要注意的是
webpack是4.x版本时,html-webpack-plugin也要是4.x版本
同理
webpack是5.x版本时,html-webpack-plugin也要是5.x版本
*/
const { resolve } = require("path");
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
            }
        ]
    },
    plugins:[new htmlPlugin({
        template:"./src/index.html"
    })],


    /*
    plugins:[
        new htmlPlugin()
    ]
    */
    //上面这段代码执行过后会默认创建一个空的HTML,自动引入打包输出的所有资源(JS/CSS)


    /*
    plugins:[new htmlPlugin({
        template:"./src/index.html"
    })],
    执行上面这段代码执行过后,会把HTML文件输出到打包目录,并将原来HTML文件的内容
    原封不动的拿到打包目录下的index.html,并自动引入打包输出的所有资源。
    */
    mode:"development"
}