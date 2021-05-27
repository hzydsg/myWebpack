/*
webpack.config.js是webpack的配置文件,它用来指示webpack干活
当你运行webpack指令的时候,会加载里面的配置

不同文件需要不同loader
*/
module.exports={
    //入口起点
    entry:"./src/js/index.js",

    //输出位置
    output:{
        filename:"built.js",
        path:__dirname+"/build"
    },

    //loader的配置
    module:{
        rules:[
            //详细的loader配置
            {
                test:/\.css$/,
                use:[
                    //下面这个的作用是创建style标签,将js的样式资源插入进行,添加到head中生效
                    'style-loader',
                    //将css文件变成commonJS模块加载到js中,里面内容是样式字符串。
                    'css-loader'
                ]
            },
            {
                test:/\.less$/,
                use:["style-loader","css-loader","less-loader"]
                //Cannot find module 'less'
                /*
                出现以上的报错情况必须要下载less loader
                */
                //这上面这个数组的loader顺序不能变
            }
        ]
    },
    //plugin的配置
    plugins:[],

    //模式的配置
    mode:"development"
}