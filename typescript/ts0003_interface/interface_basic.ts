interface LabelledValue{
    label:string
}
function printLabel(labelObj:LabelledValue)
{
    console.log(labelObj.label)
}
//只需要有一个label:string字段就可以
let myObj={size:10,label:"Size 10 Object"}
printLabel(myObj)