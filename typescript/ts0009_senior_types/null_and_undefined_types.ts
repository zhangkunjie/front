let s = "foo";
s = null; // 错误, 'null'不能赋值给'string'
let sn: string | null = "bar";
sn = null; // 可以
sn = undefined; // error, 'undefined'不能赋值给'string | null'


function f(x: number, y?: number) {
    return x + (y || 0);
}
f(1, 2);
f(1);
f(1, undefined);
//f(1, null); // error, 'null' is not assignable to 'number | undefined'
//使用！去除null和undefinde
function fixed(name: string | null): string {
    function postfix(epithet: string) {
      //return name.charAt(0) + '.  the ' + epithet; // ok
      return name!.charAt(0) + '.  the ' + epithet; // ok
    }
    name = name || "Bob";
    return postfix("great");
  }