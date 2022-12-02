import { WordsConsumer } from './GrandFather';
export default function GrandDaughter(){
      return (
        <div>
            <WordsConsumer>
             {value=><h5>我是孙女 ，爷爷说{value}</h5>}
            </WordsConsumer>
        </div>
      )
    }