//泛型约束
interface Lengthwise {
    length: number;
}
//T继承了Lengthwise就有了length属性
function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length)
    return arg;
}
loggingIdentity({ length: 10, value: 2 })
