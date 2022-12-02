function identity<T>(arg: T): T {
    return arg
}
let out1 = identity<string>("myString")
console.log(out1)
let out2 = identity("myString")
console.log(out2)
let out3 = identity<number>(1)
console.log(out3)
export{}