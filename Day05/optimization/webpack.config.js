const {resolve}=require("path");
const htmlPlugin=require("html-webpack-plugin");
module.exports={
    entry:{
        main1:"./src/js/main1.js",
        main2:"./src/js/main2.js"
    },
    output:{
        filename:"js/[name].js",
        path:resolve(__dirname,"build")
    },
    module:{
        rules:[

        ]
    },
    plugins:[new htmlPlugin({
        template:"./src/index.html",
        minify:{
            removeComments:true,
            collapseWhitespace:true
        }
    })],
    mode:"production",
    optimization:{
        splitChunks:{
            chunks:"all",
            minSize:30*1024,//分割的最小的chunk为30kb
            maxSiza:0,//最大没有限制
            minChunks:1,//要提取的chunk最少要被引用一次
            maxAsyncRequests:5,//按需加载时并行加载的文件最大数量
            maxInitialRequests:3,//入口js文件最大并行请求数量
            name:true,//可以使用命名规则
            automaticNameDelimiter:'~',//名称连接符
            cacheGroup:{
                vendors:{
                    test:/[\\/]node_modules[\\/]/,
                    priority:-10
                },
                default:{
                    minChunks:2,
                    priority:-20,
                    reuseExistingChunk:true
                }
            }
        }
    }
}