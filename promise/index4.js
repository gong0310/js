
console.log('我是前面的');
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


demo()
async function demo() {
    let data = await getdata() //肉眼效果类似于开始同步了，其实是在等待promise对象产出结果。
      console.log('data',data)//去掉await打印出来就是<pending>等待
     //不需要继续嵌套回调了，解决回调地狱
    
    let data2 = await getdata()
    console.log('data2',data2)
    console.log('async执行完后');
}
console.log('先打印')
