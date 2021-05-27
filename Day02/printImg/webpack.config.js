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
                use:["style-loader","css-loader"]
            },
            {
                test:/\.(jpg|png|gif)$/,
                loader:"url-loader",
                options:{
                    /*
                    图片体积小于8kb,就会被当做base64处理
                    base64
                    优点:减少请求数量
                    缺点:图片体积会变大

                    要打包图片必须下载两个loader
                    url-loader file-loader
                    url-loader依赖于file-loader
                    */
                    limit:8*1024,
                    /*
                    给文件重命名
                    使用name字段
                    */
                   name:"图片二.jpg"
                }
            }
        ]
    },
    plugins:[
        new htmlPlugin({
            template:"./src/index.html"
        })
    ],
    mode:"development"
}