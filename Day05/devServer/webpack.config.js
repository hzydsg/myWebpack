const {resolve}=require("path");
const pullCss=require("mini-css-extract-plugin");
const htmlPlugin=require("html-webpack-plugin");
const cssmin=require("optimize-css-assets-webpack-plugin");
module.exports={
    entry:"./src/js/main.js",
    output:{
        filename:"[name].js",
        path:resolve(__dirname,"build")
    },
    module:{
        rules:[{
            oneOf:[{
                test:/\.css$/,
                use:[
                    pullCss.loader,
                    "css-loader"
                ]
            }]
        }
        ]
    },
    plugins:[new htmlPlugin({
        template:"./src/index.html",
        minify:{
            collapseWhitespace:true,
            removeComments:true
        }
    }),new pullCss({
        filename:"css/main.css"
    }),new cssmin()],
    mode:"production",
    resolve:{
        extensions:[".js",".json","jsx",".css"],//引入文件模块可以不用写后缀的文件类型
        //默认是js文件和json文件不用写后缀
        alias:{
            $css:resolve(__dirname,"src/css")//配置别名
        }
    },//解析模块的规则
    devServer:{
        contentBase:resolve(__dirname,"build"),
        compress:true,//采用gzip压缩
        port:3000,//端口号
        open:true,//自动打开浏览器
        hot:true,//打开HMR功能
        clientLogLevel:"none",//不要显示服务器启动日志信息
        quiet:true,//除了一些基本启动信息以外,其他内容不要显示
        overlay:false,//如果出错了,不要全屏提示
        watchContentBase:true,//监视contentbase目录下的所有文件,一旦发生变化,就会重载。
    }
}