//接口支持多继承:这个是和java区别的一点，java只运行单继承
interface Shape{
    color:string
}
interface PenStroke{
    penWidth:number
}
interface Square extends Shape,PenStroke{
    sideLength:number
}
let square=<Square>{};
square.color="blue"
square.sideLength=10;
square.penWidth=5.0