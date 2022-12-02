let sym1 = Symbol();
let sym2 = Symbol("key"); // 可选的字符串key
let sym3 = Symbol("key"); // 可选的字符串key
//Symbol可以做对象的属性
let sym = Symbol();
let obj = {
    [sym]: "value"
};
console.log(obj[sym]); // "value"