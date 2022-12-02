//可索引类型
interface  StringArray{
  [index:number]:string;
}
let myArray:StringArray=['a','b','c']
let myArrayStr:string=myArray[0]

interface NumberDictionary {
     [index: string]: number;
     length: number;    // 可以，length是number类型
     //name: string       // 错误，`name`的类型与索引类型返回值的类型不匹配
}
//定义了一个只读的字符串数组
interface ReadonlyStringArray {
     readonly [index: number]: string; //只读属性
 }
 let myArray1: ReadonlyStringArray = ["Alice", "Bob"];
 //myArray1[2] = "Mallory"; // error!
