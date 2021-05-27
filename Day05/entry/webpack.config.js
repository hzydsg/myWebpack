const {resolve}=require("path");
/*
entry的值有三种形式
1.字符串
一个入口,最终只形成一个bundle文件

2.数组
多入口,并不会形成多个bundle文件,只会形成一个bundle文件
用于特殊场景,HMR

3.对象形式
多入口,会形成多个bundle文件,用于生产环境的优化
在对象中对应的属性名就是文件名
第一种和第三种形式用的最多
*/
const htmlPlugin=require("html-webpack-plugin");
module.exports={
    entry:{
        index:"./src/js/index.js",
        main:"./src/js/main.js"
    },
    output:{
        filename:"[name].js",
        path:resolve(__dirname,"build")
    },
    plugins:[new htmlPlugin({
        template:"./src/index.html",
        minify:{
            collapseWhitespace:true,
            removeComments:true
        }
    })],
    mode:"development",
    devServer:{
        contentBase:resolve(__dirname,"build"),
        compress:true,
        port:3000,
        open:true,
        hot:true
    }

}