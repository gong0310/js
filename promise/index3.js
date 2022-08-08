console.log('common.js')
//基于node
const fetch = require('node-fetch')

function getData() {
    return  fetch('http://study.jsplusplus.com/xiaomi/getXiaomiDatas?phone=true')
        .then(res => {
            return res.json()
        })
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}
getData().then(res => {
    console.log('res')
})


// async的意思是当前这个异步函数与同一作用域下的程序是异步的关系
async function logData(){
    console.log('async打印')
    const data=await getData()
    console.log('异步后打印')
}
logData()

console.log('先打印')



// await 是一个操作符 有点等待的意思---去掉await打印出来就是<pending>等待
// 等待一个promise对象产出结果的操作手段
// 功能是暂停async的执行，等待promise处理后的结果
// 假如promise处理结果是rejected，会抛出异常

//async 函数是通过一个隐式的promise返回pending状态
console.log(logData())//pending