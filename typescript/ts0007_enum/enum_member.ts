//枚举值作为类的成员
enum ShapeKind {
  Circle,
  Square,
}

interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}

interface Square {
  kind: ShapeKind.Square;
  sideLength: number;
}

let c: Circle = {
  //kind: ShapeKind.Square, //这里会报错，kind:必须是Circle类型
  radius: 100,
}