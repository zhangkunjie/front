import { useContext } from "react"
import { WordsContext } from './GrandFather';


export default function GrandSon(){
    //爷爷说的话
    const words=useContext(WordsContext)
      return (
        <div>
            我是孙子，爷爷说:{words}
        </div>
      )
    }