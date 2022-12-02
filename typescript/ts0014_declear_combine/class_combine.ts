//合并类和命名空间
//合并规则与上面 合并命名空间小节里讲的规则一致，我们必须导出 AlbumLabel类，好让合并的类能访问。 
//合并结果是一个类并带有一个内部类。 你也可以使用命名空间为类增加一些静态属性。
class Album {
    label: Album.AlbumLabel;
}
namespace Album {
    export class AlbumLabel { }
}
