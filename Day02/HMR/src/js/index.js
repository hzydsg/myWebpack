
import "../css/style1.css";
import m1 from "./m1";
console.log("hello grunt");
console.log("hello gulp");
console.log("hello webpack");
console.log("你好,三大构建工具");

if(module.hot){
    module.hot.accept("./m1.js",function(){
        m1.x();
        m1.y();
    })
}