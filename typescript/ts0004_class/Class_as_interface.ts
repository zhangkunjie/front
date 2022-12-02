class Point{
    x:number;
    y:number;
    constructor(x:number,y:number)
    {
      this.x=x;
      this.y=y;
    }
}
interface Point3D extends Point{
    z:number
}
let point3d:Point3D={x:1,y:2,z:3};
console.log(point3d.z)
