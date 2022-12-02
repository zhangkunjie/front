enum FileAccess {
  // constant members
  None,
  Read    = 1 << 1,
  Write   = 1 << 2,
  ReadWrite  = Read | Write,
  // computed member
  G = "123".length
}
console.log(FileAccess.None)
console.log(FileAccess.Read)
console.log(FileAccess.Write)
console.log(FileAccess.ReadWrite)
console.log(FileAccess.G)
export{}
