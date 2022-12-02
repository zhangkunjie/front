//泛型类
class GenericNumber<T> {
    zeroValue: T;
    fun: (x: T, y: T) => T;
}
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.fun = function(x, y) { return x + y; };
let fun=myGenericNumber
console.log(fun.fun(10,5))
let myGenericNumber1 = new GenericNumber<number>();
myGenericNumber1.zeroValue = 0;
myGenericNumber1.fun = function(x, y) { return x *y; };
let fun1=myGenericNumber1
console.log(fun1.fun(10,5))
export{}