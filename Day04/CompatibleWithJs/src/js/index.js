import '../css/style1.css';
//import "@babel/polyfill"
console.log('hello grunt');
console.log('hello gulp');
console.log('hello webpack');
console.log('你好,三大构建工具');
let fn1=()=>{
    console.log("我是fn1");
}
fn1();

let p=new Promise((resolve,reject)=>{
    resolve("hzydsg");
})
p.then((success)=>{
    console.log(success);
})