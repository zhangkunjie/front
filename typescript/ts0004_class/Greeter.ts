class Greeter{
    greeting:string;
    constructor(message:string)
    {
        this.greeting=message
    }
    greet(){
        return "hello"
    }
}
let greeter2=new Greeter("world");
console.log(greeter2.greet());