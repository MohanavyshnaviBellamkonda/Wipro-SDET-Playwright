/*Polymorphism:-Polymorphism means having many forms that means The same method behaves differently depending on the object
   usage:
   Makes code flexible
   Reduces complexity
   Easy to extend
   Same method name → cleaner code

   Examples:

   1)class Shape 
   {
    draw() {
        console.log('Drawing a shape');
    }
}
 
class Circle extends Shape 
{
    draw() {
        console.log('Drawing a circle');
    }
}
 
class Square extends Shape 
{
    draw() {
        console.log('Drawing a square');
    }
}
 
const shapes = [new Circle(), new Square()];
 
shapes.forEach(shape => shape.draw());

2)
class Animal 
{
    sound() {
        console.log("Animal makes sound");
    }
}

class Dog extends Animal 
{
    sound() {
        console.log("Dog barks");
    }
}

class Cat extends Animal 
{
    sound() {
        console.log("Cat meows");
    }
}

const animals = [new Dog(), new Cat()];

animals.forEach(animal => animal.sound());

3)
class Employee 
{
    work() {
        console.log("Employee works");
    }
}

class Developer extends Employee 
{
    work() {
        console.log("Developer writes code");
    }
}

class Tester extends Employee 
{
    work() {
        console.log("Tester tests software");
    }
}

const employees = [new Developer(), new Tester()];

employees.forEach(emp => emp.work());

