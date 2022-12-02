function add(x: number, y: number):number {
    return x + y;
}
let myAdd = function(x: number, y: number): number { return x + y; };
//完整函数类型
let myAdd1: (baseValue: number, increment: number) => number =
    function(x: number, y: number): number { return x + y; };
//类型推断
let myAdd2: (baseValue: number, increment: number) => number =
    function(x, y) { return x + y; };
//可选参数和默认参数  
//传递给一个函数的参数个数必须与函数期望的参数个数一致
function buildName(firstName: string, lastName: string) {
    return firstName + " " + lastName;
}
//let result1 = buildName("Bob");                  // error, too few parameters
//let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");         // ah, just right
//给参数设置默认值
function buildName1(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}
let result1 = buildName1("Bob");                  // works correctly now, returns "Bob Smith"
let result2 = buildName1("Bob", undefined);       // still works, also returns "Bob Smith"
//let result3 = buildName1("Bob", "Adams", "Sr.");  // error, too many parameters
let result4 = buildName1("Bob", "Adams");         // ah, just right
//前置默认参数
function buildName2(firstName = "Will", lastName: string) {
    return firstName + " " + lastName;
}
//let result5 = buildName2("Bob");                  // error, too few parameters
//let result6 = buildName2("Bob", "Adams", "Sr.");  // error, too many parameters
let result7 = buildName2("Bob", "Adams");         // okay and returns "Bob Adams"
let result8 = buildName2(undefined, "Adams");     // okay and returns "Will Adams"
//剩余参数
function buildName3(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
  }
let employeeName = buildName3("Joseph", "Samuel", "Lucas", "MacKinzie");

  
