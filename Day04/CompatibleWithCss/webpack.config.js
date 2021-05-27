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
                options:{
                    limit:8*1024,
                }
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