//Advanced Javascript Concepts
//Default Parameters
/*
function welcome(name="guest")
{
    console.log(`Welcome ${name}`);
}

welcome("vyshu");
welcome("phani");
welcome() // logs guest

//Spread Operator
//Variables
const nums = [1,2,3,4,5];
const newnums = [...nums,6,7,8,9,10];
console.log(newnums);

//objects

const obj = {name:"vyshu", age:22};
const newobj = {...obj, surname:"bellamkonda"};
console.log(newobj);

//rest operator 
const cal = { // rest operator
    sum: (...nums) => nums.reduce((a, b) => a + b, 0), // rest parameters
}

console.log("\n3. Rest Operator:");
console.log(cal.sum(1, 2, 43, 4))

// destructuring
// const arr = ["Vyshu", "Phani", "Harshi", "Manu"];
// const first = arr[0];
// const second = arr[1];
// const third = arr[2];
// const fourth = arr[3];

const [first, second, third, fourth, fifth] = ["Vyshu", "Phani", "Harshi", "Manu"]; // pos-based extraction
const [one, two, ...three] = [1, 3, 5, 6, 7];
console.log("\n4. Destructuring:");
console.log(first, second, third, fourth, fifth);
console.log(one, two, three)

const { name, age } = {name: "Vyshu", age: 22}; // key-based extracted
console.log(name, age);

*/



