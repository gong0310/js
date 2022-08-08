/**
 *  prototype:原型//prototype就是调用构造函数所创建的那个实例对象的原型,prototype可以让所有对象实例共享它所包含的属性和方法
 * __proto__:原型链(链接点)
 * 
 * 从属关系
 * 1.prototype->函数的一个属性：对象{}
 * 2.__proto__->对象Object的一个属性：对象{}
 * 3.对象的__proto__保存着该对象的构造函数的prototype
 */

//构造函数一定大写，大写不一定是构造函数，要看他怎么用，是否实例化new
function Test() {
    this.a = 1
}
console.log(Test.prototype)

const test = new Test()
console.log('结果=>', test.__proto__);
console.log('=============================')
console.log(test.__proto__ === Test.prototype)//true,印证了第3句
console.log(Test.prototype.__proto__ === Object.prototype)//true,印证了第2句,Test.prototype是一个对象，所以也有__proto__
console.log(Object.prototype.__proto__)//null
console.log(typeof Object)//function
console.log('-----------------')
Test.prototype.b = 2
console.log(test)
Object.prototype.c = 3
/**
 * test {
 *   a:1,
 *   __proto__:Test.prototype={
 *      b:2,
 *      __proto__:Object.prototype={
 *          c:3,
 *          __proto__:null
 *      }
 *   }
 * }
 */

// 1.一个对象为基准，以__proto__为连接的链条，一直到Object.prototype为止的这个链就叫原型链
// 2.在声明了一个函数之后，浏览器会自动按照一定的规则创建一个对象，这个对象就叫做原型对象。
// 3.原型链继承:沿着实例对象test(普通对象可当成Object的实例对象)的__proto__向他的构造函数fn的prototype去找,找到了就返回这个，
// 如果fn.prototype没有这个属性，则会fn.prototype.__proto__继续往上找，如果一直找到Object.prototype还没有，则会返回undefined，这所谓的层层查找关系就是原型链（原型链继承,简单来说就是1）

console.log(test.a)
console.log(test.b)//b,c都是继承来的，test.hasOwnProperty('b')->false判断是否是自身的
console.log(test.c)//沿着实例对象test的__proto__向他的构造函数fn的prototype去找


console.log('a' in test)//判断链上是否有的
console.log('b' in test)//判断链上是否有的
console.log('c' in test)//判断链上是否有的


console.log('-----------------')
console.log(Test.__proto__===Function.prototype)
console.log(Function.__proto__)
console.log(Function.prototype)

console.log(Object.__proto__===Function.prototype)


//test.constructor=>实例化test对象的构造函数
console.log(test.constructor)
console.log(test.constructor===Test)//true

function Test1() {
    this.a = 111
}
test.constructor=Test1
console.log(test)//constructor是可以改变的

