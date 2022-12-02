import Father from "./Father"
import React from "react"
function GrandFather(){
//爷爷说的话
  return (
    <div>
        <WordsProvider value="我是咱家的爷爷">
          <Father/>
        </WordsProvider>
    </div>
  )
}
//定义导出上下文组件
export const WordsContext=React.createContext({})
//定义导出提供组件
export const WordsProvider=WordsContext.Provider
//定义导出消费组件
export const WordsConsumer=WordsContext.Consumer
//定义导出爷爷组件
export default GrandFather
