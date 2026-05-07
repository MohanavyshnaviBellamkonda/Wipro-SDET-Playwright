/*
//class,constructor,Object
class home{
    constructor(name,age)
    {
        this.name = name;
        this.age = age;
    }
    person()
    {
        console.log(`My name is ${this.name} and my age is ${this.age}`)
    }
}

const obj1 = new home("vyshu",22);
const obj2 = new home("phani",23);
obj1.person();
obj2.person(); 

//Encapsulation

class Bank{
    #balance = 0; //we have declare the private variable like this using #
    Constructor(){
        
    }
    deposit(amount){
        if (amount > 0)
        {
            this.#balance += amount;
            console.log(`Amount is deposited to your bank account RS.${amount} and your current balance is ${this.#balance}`);
            //we have to use # while calling that private variable 
        }
        else{
            console.log("enter postive value");
        }
    }
    withdraw(amount)
    {
        if(amount <= this.#balance && amount > 0 )
        {
            this.#balance -= amount;
            console.log(`Amount is deposited from your account RS.${amount} and your current balace is ${this.#balance}`);
        }
        else{
            console.log("Enter positive value.")
        }
    }
}

const obj = new Bank()

obj.deposit(1000);
obj.withdraw(500); 

//Some examples of Encapsulation
//1.Student Management system

class Student{
    #marks = 0
    constructor(name,marks){
        this.name = name;
        this.#marks = marks;
    }
    addmarks(marks){
        if(marks > 0)
        {
            this.#marks += marks;
        }
        else{
            console.log("Enter positive value");
        }
    }
    getscore(){
        console.log(`Congratulations ${this.name},You got this ${this.#marks} score` );
    }
    getgrade(marks){
        let grade = "A";
        if(this.#marks >= 75)
        {
            grade = "A";
        }
        else if(this.#marks <75 && this.#marks >= 50)
        {
            grade = "B";
        }
        else if (this.#marks <50 && this.#marks >=35)
        {
            grade = "C";
        }
        else
        {
            grade = "fail";
        }
        console.log(`Your grade is ${grade}`);
    }
}

const Student1 = new Student("vyshu",89);
Student1.addmarks(10);
Student1.getscore();
Student1.getgrade(); */

//Example2
//Employee salary System


class Employee{
    #salary = 0;
    constructor(name,salary){
        this.name = name;
        this.#salary = salary;
    }
    addBonus(amount)
    {
        if(amount > 0)
        {
            this.#salary += amount;
        }
        else{
            console.log("enter positive value");
        }
        console.log(`Employee ${this.name} has salary RS.${this.#salary}`)

    }
    deduct(amount)
    {
        if (amount>0)
        {
            this.#salary -= amount;
        }
        else
        {
            console.log("Enter positive value")
        }
        console.log(`Hello ${this.name}, some amount is deducted and after deductio you have salary ${this.#salary}`);
    }
    yearlysal()
    {
        this.#salary = this.#salary * 12;
        console.log(`you yearly salary is ${this.#salary}`);
    }

}

const E1 = new Employee("vyshu",50000);
E1.addBonus(2500);
E1.deduct(1000);
E1.yearlysal();


