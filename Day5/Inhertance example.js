/*Inheritance: Inheritance means one class can use the properties and methods of another class
-we can call base class - Parent class and child class - derived class
-super() function is most important function, we need this function to call properties and methods from base class
- We must use extends keyword to extend parent clss by using child class
Usage:

Avoid repeating code
Reuse existing logic
Make code cleaner and scalable

Syntax:
class Parent {
    constructor() {}
}

class Child extends Parent {
    constructor() {
        super(); // calls parent constructor
    }
}

Examples:-
1)
class user // parent class
{
    constructor(name){
        this.name = name;
    }
    login()
    {
        console.log(`Hello ${this.name}, you are logged in`);
    }

}

class admin extends user // child class
{
    constructor(name,role){
        super(name);
        this.role = role;
    }
    admin()
    {
        super.login()//Here we are calling parent class method
        console.log(`Hello ${this.name} you have admin privilages as ${this.role}`);
    }
}

const u1 = new user("vyshu");
const a1 = new admin("vyshu","project engineer");

u1.login();
a1.admin()

*/

//2)

class Name {
    constructor(name) {
        this.name = name;
    }

    name1() {
        console.log(`${this.name}`);
    }
}

class Wish extends Name {
    constructor(name, wish) {
        super(name); // pass name to parent
        this.wish = wish;
    }

    greet() {
        super.name1(); // correct method name
        console.log(`Hello ${this.name}, ${this.wish}`);
    }
}

const n1 = new Name("vyshu");
const g1 = new Wish("vyshu", "you are gorgeous");

n1.name1();
g1.greet();