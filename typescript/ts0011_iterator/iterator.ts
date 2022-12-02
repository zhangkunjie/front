let data=[1,"string",false];
//遍历数组下标
for(let item in data)
{
    console.log(item)
}
//遍历数组元素
for(let item of data)
{
    console.log(item)
}
//ES6语法，直接遍历数组
console.log(...data)

let pets = new Set(["Cat", "Dog", "Hamster"]);
//pets["species"] = "mammals";

for (let pet in pets) {
    console.log(pet); // "species"
}

for (let pet of pets) {
    console.log(pet); // "Cat", "Dog", "Hamster"
}