const {resolve}=require("path");
const htmlPlugin=require("html-webpack-plugin");
module.exports={
    entry:"./src/js/index.js",
    output:{
        filename:"[name].js",
        path:resolve(__dirname,"build")
    },
    mode:"production",
    plugins:[new htmlPlugin({
        template:"./src/index.html",
        minify:{
            collapseWhitespace:true,
            removeComments:true
        }
    })]
}