class Animal{
    move(distanceInMeters:number){
        console.log(`Animal moved ${distanceInMeters}m.`)
    }
}
class Dog extends Animal{
    bark(){
        console.log('Woof!Woof')
    }
}
const dog=new Dog();
dog.bark();
dog.move(10);
dog.bark();
export{}