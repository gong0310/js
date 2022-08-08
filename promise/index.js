//promise 异步问题同步化解决方案  只是顺带解决回调地狱

//1.对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）
//2.一旦状态改变，就不会再变，任何时候都可以得到这个结果
const p = new Promise((resolve, reject) => {//同步---excutor执行器(同步执行)（包含resolve, reject）,返回一个Promise（then）
    console.log('我是前面的Promise里面的同步')
    $.ajax({
        type: "get",
        url: "http://127.0.0.1:5500/promise/data.json",
        // data: "data",
        // dataType: "dataType",
        success: function (data) {
            resolve(data)
        }
    });
})


//这个链式操作不是解决回调地狱的最佳方案
p.then(res => {//异步
    console.log('结果=>', getNames(res));
    // return new Promise(res,rej=>{})//如果后面要继续链式then，要返回一个promise对象
    return Promise.resolve('成功啦')
}).then(res=>{
    console.log('结果=>',res);//成功啦
})

console.log('我是后面的');


function getNames(data) {
    return data.map(i => i.name)
}


//async await 解决回调地狱的最佳方案
function getdata() {
    return new Promise((resolve, reject) => {
       return $.ajax({
            type: "get",
            url: "http://127.0.0.1:5500/promise/data.json",
            // data: "data",
            // dataType: "dataType",
            success: function (data) {
                resolve(data)
            }
        });
    })
}


aaa()
async function aaa() {
    let data = await getdata()
    //开始同步了，就不需要继续嵌套回调了，解决回调地狱
    console.log('await',getNames(data))
    let data2 = await getdata()
    console.log('await','data2',getNames(data2))
    console.log('async执行完后');
}


// throw new Error('抛出错误')

