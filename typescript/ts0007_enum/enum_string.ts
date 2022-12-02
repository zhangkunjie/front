enum Direction {
    Up = "上",
    Down = "下",
    Left = "左",
    Right = "右",
}
function move(d:Direction)
{
  console.log("正在向"+d+"方向移动")
}
let u=move(Direction.Up)
export{}