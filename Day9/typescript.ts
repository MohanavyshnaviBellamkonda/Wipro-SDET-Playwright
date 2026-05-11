/*
let name = "vyshu";
console.log(name);

let name1 :string = "phani";
name1 = 10; //give the error that name1 is string 
let output: number | string
output = 10;
output = "phani";
console.log(output);

function add(a:number, b:number):number
{
    return  (a+b);
}
console.log(add(5,10));

//INTERFACE

interface Person {
    id: number;
    name: string;
    age: number;
    role: Role; // using enum for role
    isAdmin?: boolean; // optional property ?
}

interface Person {
    email: string; // merge interface to add email property
}

//Declaring enum here
enum Role {
    User = "USER",
    Admin = "ADMIN",
    SuperAdmin = "SUPER_ADMIN"
} // USER, user, User, ADMIN, Admin, admin, SUPER_ADMIN, SuperAdmin, superAdmin

const user: Person = {
    id: 1,
    name: "Vyshu",
    age: 25,
    role: Role.User,
    email: "vyshu@gmail.com"
};

const admin: Person = {
    id: 2,
    name: "Phani",
    age: 30,
    email: "phani@gmail.com",
    role: Role.Admin,
    isAdmin: true
};

console.log(user, admin);

//array
let arr: number[] = [1, 2, 3]; // array of numbers
console.log("Array:", arr);

//Tuple
let coordinates: [number, string] = [40.7128, "-74.0060"]; // Tuple for latitude and longitude
console.log("Coordinates:", coordinates);




//Generics
// function identity<T>(arg: T): T {
//     return arg;
// }

// let output = identity<number>(10);
// let outpu1 = identity<string>("Aaryan");
// let outpu2 = identity<boolean>(true);

// console.log(output, outpu1, outpu2);

// Generic interface for a bag that can hold any type of content
// interface Bag<T> {
//     content: T;
// }

// const stringBag: Bag<string> = {content: "Apple"};
// const numberBag: Bag<number> = {content: 5};

// console.log(stringBag, numberBag);

class Storage<T> {
    private items: T[] = [];

    addItems(item: T): void { // no return type
        this.items.push(item);
    }

    getItem(index: number): T {
        return this.items[index]!; // non-null assertion operator to indicate that the item will exist at the given index
    }
}

const names = new Storage<string>();
names.addItems("vyshu");
names.addItems("phani");
names.addItems("harshi");

console.log(names.getItem(0), names.getItem(1), names.getItem(2), names.getItem(3)); // undefined for index 3
*/
//Generics with constraints

interface Haslength {
    length:number;
}

//generics with constraints | extends keyword
function logLength<T extends Haslength >(arg:T) : void {
    console.log(arg.length);
}

logLength("Vyshnavi"); //String has length
logLength([1,2,3,4]); //Array has length
//logLength(15); // number doesn't have length property which throes an error