console.log("main.js文件被加载了");
/*
如何实现懒加载
使用ES的新语法 import函数
按需加载,需要的时候才加载
也就是异步加载,而不是同步加载
而不是并行加载,导致速度过慢。
从而可以达到生产环境的优化
*/

/*
如何实现预加载
预加载就是不会去同步加载,等那些需要同步加载的文件加载完后,在浏览器空闲的时候才回去加载
,这样做的好处是,相比懒加载来说,它可以预先加载好,耗费时间少,用户体验好。适合用于加载一些大文件。
*/
document.getElementById("btn01").onclick=function(){
    import(/* webpackChunckName:'m1',webpackPrefetch:true */"./m1").then((module)=>{
        module.fn1();
    })
}

