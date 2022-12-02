//内部模块使用namespace关键字
namespace fun{
   export function  add(a:number,b:number):number{
    return a+b
}
export  function minus(a:number,b:number):number{
    return a-b;  
 }
}
console.log(fun.add(1,2))