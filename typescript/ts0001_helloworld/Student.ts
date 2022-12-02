class Student{
    fullName:string;
    constructor(public firstName:string,public middleInitial:string,public lastName:string){
        this.fullName=firstName+" "+middleInitial+" "+lastName
    }
}

function greeter2(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let user2 = new Student("Jane", "M.","User");

document.body.innerHTML = greeter2(user2);
export{}