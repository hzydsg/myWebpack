import(/* webpackChunkName:'m1'*/"./m1").then((module)=>{
    module.fn1();
});

import(/* webpackChunkName:'m2'*/"./m2").then((module)=>{
    module.fn2();
})