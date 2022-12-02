function identity<T>(arg: Array<T>): Array<T> {
    console.log(arg.length)
    return arg
}
let  data1=[1,2,3,4,5]
let  fun1=identity(data1)
console.log(fun1)
let  data2=["a","b","c"]
let  fun2=identity(data2)
console.log(fun2)
export{}