interface Person{
    firstName:String;
    lastName:String;
}
function greeter1(person:Person)
{
    return "Hello,"+person.firstName+" "+person.lastName
}
let  user1={firstName:"Jane",lastName:"User"};
console.log(greeter1(user1))
export{}