import { P } from "@antv/g2plot";

interface Person{
    name?:string;
    age:number;
}

function showInfo(person:Person):{age:number}{
   let increment={age:person.age+1}
   return increment
}

let user={"names":10,age:22}
console.log(showInfo(user).age)