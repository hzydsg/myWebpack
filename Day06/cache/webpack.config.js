const {resolve}=require("path");
const htmlPlugin=require("html-webpack-plugin");
const pullCss=require("mini-css-extract-plugin");
const cssmin=require("optimize-css-assets-webpack-plugin");
process.env.NODE_ENV="development";
/*
文件资源缓存
使用文件资源缓存可以提高用户访问速度
但是在一定时间范围,如果源文件发生了变化,用户是得不到最新的反馈的。
这个时候可以使用三种hash值
1.在输出文件的文件名加上[hash],例如下面这样
filename:"built.[hash:10].js"
filename:"css/main.[hash:10].css"
可是这样会导致全部缓存失效,因为所有文件后面都加上了hash值,尽管可以在打包后
得到最新反馈,但是打包后会生成一个全新的hash值,而且所有文件的hash值都一样
所以所有文件都会得到更新,但是我可能只更改部分文件,却要全部更新,这样明显不好

2.在输出文件的文件名加上[chunkhash]
但是同一个chunk hash值还是相同的,所以还是和上面一样

3.在输出文件的文件名加上[contenthash]
它会根据内容的不同生成不同hash值
这样就可以做到只更新部分文件。
*/
module.exports={
    entry:"./src/js/index.js",
    output:{
        filename:"built.[contenthash:10].js",
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
                use:{
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
                        }]],
                        cacheDirectory:true
                    }
                }
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
        filename:"css/main.[contenthash:10].css"
    }),new cssmin({
        
    })],
    mode:"production",
    devServer:{
        contentBase:resolve(__dirname,"build"),
        compress:true,
        port:3000,
        open:true
    }
}