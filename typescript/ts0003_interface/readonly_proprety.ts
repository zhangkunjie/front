interface  Point{
     readonly x :number;
     readonly y :number
}
let p1:Point={x:10,y:20}
// p1.x=20   只读属性不能修改值
let a:number[]=[1,2,3,4,5]
let ro:ReadonlyArray<number>=a;  //只读数组
//ro[1]=100 只读数组的元素不能赋值