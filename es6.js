console.log('=======================es6.js')
// Array.from()方法从类似数组或可迭代对象(如：将Set/Map结构的数据转换为真数组)创建一个新的(浅拷贝)的数组实例
// 只要是部署了Iterator（遍历器,迭代）接口的数据结构，Array.from都能将其转为数组。
let arr = ['aaa', 'ccc', 6, 8]
console.log(Array.from(arr, function (e) {
    console.log('=', e)
    return e
}))

console.log(Array.from('hello world!'));


// Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
const set1 = new Set([1, 2, 3, 4, 4]);
console.log('[...set1]=>', [...set1], 'set1.size=>', set1.size) // // 去除数组的重复成员,size为长度
console.log('去除字符串里面的重复字符', [...new Set('ababbc')].join(''))

let set = new Set()
console.log(set)
set.add('哈哈哈')
set.add('哈哈哈2')
set.add('哈哈哈3')
set.delete('哈哈哈2')
console.log('set=>',set, set.has('哈哈哈'), Array.from(set), set.keys())
let [x,y] = set
console.log(x,y) // 哈哈哈 哈哈哈3


// Map数据结构，类似于对象，也是键值对的集合，
// 但是“键”的范围，不限于字符串，各种类型的值(包括对象)都可以当作键，
// Object结构提供了“字符串——值”的对应，Map结构提供了“值——值”的对应，
// 是一种更完善的Hash结构实现，如果你需要"键值对"的数据结构
// ，Map比Object更合适

let map = new Map()
map.set('a', 111)
    .set({ n: 1 }, 222)
// map.delete('a')
console.log(map, map.get('a'), map.has('a'), Array.from(map))

// Map 转为对象
function strMapToObj(strMap) {
    let obj = Object.create(null);
    for (let [k, v] of strMap) {
        obj[k] = v;
    }
    return obj;
}
console.log(strMapToObj(map))
// 对象转为 Map
let obj = {"a":1, "b":2}; //Object.entries将对象转化为二维数组
console.log(Object.entries(obj),new Map(Object.entries(obj))) // entries键值对的遍历

// Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，
// 所以属于一种“元编程”（meta programming），即对编程语言进行编程。

/**
 * Reflect的作用就是
 * 1、将部分Object上的方法，放到Reflect中，这样就减少了Object对象的体积。
 * 
 * 2、让对象操作都变成函数行为。
 * 
 * 3、Reflect对象的方法和Proxy对象的方法一一对应，
 * 只要是Proxy对象的方法，都能在Reflect对象上找到对应的方法。
 * 这就让Proxy对象可以方便地调用对应的Reflect方法完成默认行为。
 * 也就是说，不管Proxy怎么修改默认行为，你总可以在Reflect上获取默认行为。
 * 
 * 4、修改某些Object方法的返回结果，让其变得更合理。
 * 比如，Object.defineProperty(obj, name, desc)在无法定义属性时，会抛出一个错误，
 * 而Reflect.defineProperty(obj, name, desc)则会返回false
 */


// Iterator 的作用有三个：
// 一是为各种数据结构，提供一个统一的、简便的访问接口；
// 二是使得数据结构的成员能够按某种次序排列；
// 三是 ES6 创造了一种新的遍历命令for...of循环，Iterator 接口主要供for...of消费。
// 1
let set3 = new Set().add('a').add('b').add('c');
let [x1,y1] = set3; // x1='a'; y1='b'
let [first, ...rest] = set3;// first='a'; rest=['b','c'];
// 2
var str3 = 'hello';
[...str3] //  ['h','e','l','l','o']

// for..of和for..in均可迭代一个列表；但是用于迭代的值却不同，
// for..in迭代的是对象的键的列表，而for..of则迭代对象的键对应的值。
// for..in可以操作任何对象,但是 for..of关注于迭代对象的值。如内置对象Map和Set已经实现了Symbol.iterator方法
// 对于普通的对象，for...of结构不能直接使用，会报错，必须部署了 Iterator 接口后才能使用
let list = [4, 5, 6];
for (let i in list) {
    console.log(i); // "0", "1", "2",
}
for (let i of list) {
    console.log(i); // "4", "5", "6"
}
let obj2={
    a:'111',
    b:'111',
}
for (let i in obj2) {
    console.log(i); // "a", "b"
}
// for (let i of obj2) {
//     console.log(i); // 报错
// }