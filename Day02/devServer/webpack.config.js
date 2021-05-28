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
            },{
                test:/\.(png|gif|jpg)$/,
                loader:"url-loader",
                options:{
                    limit:8*1024,
                    name:"图片二.jpg"
                }
            }
        ]
    },
    plugins:[new htmlPlugin({
        template:"./src/index.html"
    })],
    mode:"development",
    /*
    使用webpack-dev-server可以对源文件进行监听,一旦发生变化,便重新编译打包
    输出到打包目录。

    启动webpack-dev-server的命令:
    npx webpack-dev-server

    */
    devServer:{
        contentBase:resolve(__dirname,"build"),
        compress:true,
        port:3000,
        open:true
    }
    /*
    如果加上open这个字段且它的值为true时,可以实现全自动,
    不加是半自动。

    使用npx webpack-dev-server命令
    它只会在内存中编译打包,不会有任何输出,也就是不会生成build目录。
    */
}