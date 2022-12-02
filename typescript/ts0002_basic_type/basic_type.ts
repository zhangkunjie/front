//数据类型:boolean、number、string,数组,元组,枚举,Any, Void,Null|Undefined、 Object、类型断言
let isDone: boolean = false;
let decLiteral: number = 6;
let name: string = 'bob';
let list1: number[] = [1, 2, 3]
let list2: Array<number> = [1, 2, 3]
let x: [string, number];
x = ['hello', 10]
enum Color { Red = 1, Green = 2, Blue = 3 }
let color: string = Color[2];
let list3: any[] = [1, true, 'free'];
list3[1] = '100'
function warnUser(): void {
    console.log("提醒信息")
}
warnUser()
//类型断言:强制转换
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length
let strLength1: number = (someValue as string).length
console.log(strLength1)
export { }