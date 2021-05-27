const {resolve}=require("path");
const htmlPlugin=require("html-webpack-plugin");
module.exports={
    entry:"./src/js/main.js",
    output:{
        filename:"js/[name].js",
        path:resolve(__dirname,"build")
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
            chunks:"all"
        }
    }
}