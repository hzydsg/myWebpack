const {resolve}=require("path");
const htmlPlugin=require("html-webpack-plugin");
const pullCss=require("mini-css-extract-plugin");
const cssmin=require("optimize-css-assets-webpack-plugin");
process.env.NODE_ENV="development";
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
                    "css-loader",
                    {
                        loader:"postcss-loader",
                        options:{
                            ident:"postcss",
                            plugins:()=>[require("postcss-preset-env")()]
                        }
                    }
                    /*
                    这里解决了css的兼容性问题
                    */
                ]
            },{
                test:/\.(png|jpg|gif)/,
                loader:"url-loader",
            }
            ,{
                test:/\.js$/,
                exclude:/node_modules/,
                use:[{
                    loader:"thread-loader",
                    options:{
                        workers:2//代表两个进程
                    }
                },
                {
                        loader:"babel-loader",
                        options:{
                        presets:[["env",{
                            useBuiltIns:"usage",
                            corejs:{
                                version:2
                            },
                            targets:{
                                chrome:"60",
                                firefox:"60",
                                ie:"9",
                                safari:"10",
                                edge:"17"
                            }
                        }]]
                    }
                    }
                ]
                /*
                开启多进程打包
                进程开启大概为600ms,进程通信也需要花时间
                只有工作时间比较长,才适合多进程打包
                */
                
                /*
                1.基本js兼容性处理
                在webpack使用babel7需要下载的包
                "babel-core": "^6.26.0",
                "babel-loader": "^7.1.4",
                "babel-preset-env": "^1.6.1",

                需要写的配置
                {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader",
                    options:{
                        presets:["env"]
                    }
                }
                缺点:只能转换基本语法

                2.全部兼容性处理
                下载@babel/polyfill
                缺点:我只解决部分兼容性问题,但却将所有兼容性代码引入了,体积太大了。

                3.需要做兼容性处理就做,按需加载
                下载core.js
                */

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
    }),new cssmin({
        
    })],
    mode:"development",
    devServer:{
        contentBase:resolve(__dirname,"build"),
        compress:true,
        port:3000,
        open:true
    }
}