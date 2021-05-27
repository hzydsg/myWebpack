import data from "../data/db.json";
console.log(data);
function add(a,b){
    return a+b;
}
console.log(add(10023,4553));
/*
webpack打包js文件和JSON文件
打包js文件
命令:webpack 源文件路径 -o 输出文件路径 --mode=development
模式是开发模式

开发模式不会压缩代码,生产模式会压缩代码
另外浏览器不能识别ES6模块化语法

打包JSON文件
命令:
*/