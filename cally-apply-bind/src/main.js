// import utilsModule from './libs/util'
//对于一个方法来说谁调用它，默认函数内部的this就指向谁

// ------------------------call
//如果直接执行test()，正常是this指向window  windoe.test(),严格模式下是undefined
function test() {
    //this指向是call的第一个参数,比如是test1就指向test1
    //arguments是test的参数列表
    console.log(this, arguments)
}
function test1() {

}
test.call({
    a: 1,
    b: 2
}, 'aaa', 'bbb')//一个函数跟上了call，那么这个函数就执行

// ------------------------apply
function testApply() {
    //1.this指向是apply的第一个参数,比如是test1就指向test1
    //2.arguments是test的实参列表
    //3.如果apply第二个参数不是数组；是object，function,null，undefined那么arguments长度为0；是string、number、布尔，那么报错；
    //4.arguments只取第二个参数,如testApply.apply(obj,['aaa','bbb'],['a','b'])。只取['aaa','bbb'],即第三个参数到最后忽略

    console.log(this, arguments)//this=>obj
}
let obj = {
    a: 1,
    b: 2
}
testApply.apply(obj, ['aaa', 'bbb'])//一个函数跟上了apply，那么这个函数就执行

// ------------------------bind
console.log(' ------------------------bind')
function testBind(user, car) {
    //1.bind第一个参数是改变this指向,this=>obj
    //2.bind可以分离testBind的参数,bind接受一部分参数，返回的新函数接受一部分参数
    //3.bind跟call的函数参数传递是一样的
    console.log('bind',this, arguments)
    console.log(user, car)
}
//跟apply,call不同，bind不会立即执行。会返回一个新的函数
let t = testBind.bind(obj, '张三')
t('奥迪')

//4.实例化的新函数->this指向testbind构造出来的实例
//5.实例应该继承testBind构造函数上的原型属性
testBind.prototype.mylove = '小红'
let newt = new t('小六')
console.log(newt)


