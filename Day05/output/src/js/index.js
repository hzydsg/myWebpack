import {fn1} from "./m1";
import {fn2} from "./m2";

fn2();
if(module.hot){
    module.hot.accept("./m1.js",function(){
        fn1();
    })
}

if(module.hot){
    module.hot.accept("./m2.js",function(){
        fn2();
    })
}