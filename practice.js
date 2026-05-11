//Practice Questions

//Variables & Data Types
/*
1. Create a program that swaps two numbers without using a third variable.

let a = 10;
let b = 5;

console.log(a);
console.log(b);

a = a - b; //5
b = b + a; // 10

console.log(a); //5
console.log(b);// 10 

2. Write a program to check whether a given value is a number, string, boolean, null, or
undefined.

var val = "vyshu";

console.log(typeof val === Number); // not a number -true
console.log(typeof val === "string"); 
console.log(typeof val === Boolean);
console.log(typeof val === null);
console.log(typeof val === undefined) 

3. Convert temperature from Celsius to Fahrenheit using variables.

let c = 25;
console.log("temperature in celsius " + c)
let f = (9/5 * c) + 32;
console.log("temperature in fahrenheit " + f)

console.log(f);

4. Create a simple calculator using variables and arithmetic operators.

(addition,subtraction,multiplication,division)

let a = 10;
let b = 5;

c = '-';

if(c == '+')
{
 console.log("Addition " + (a+b));
}
 else if (c == '-')
{
 console.log("subtraction " + (a-b));
 }
 else if (c == '*')
 {
 console.log("Multiplication " + (a*b));
 }
 else if ( c == '/')
 {
 console.log("Division " + (a/b));
 }
 else if( c == '%')
 {
 console.log("modulous division " + (a%b));
 }
 else
 {
    console.log("enter valid operator");
 }

 
5. Write a program that takes a user’s birth year and calculates age.


let year;
const currentyear = 2026;

function ageofaperson(year)
{
 let age;
 age = (currentyear - year);
 console.log("your age is "+ age);
}

ageofaperson(2003);


2. Strings
1. Reverse a string without using built-in reverse methods.

let str = "vyshu";
let result = " ";

for ( i =str.length - 1; i >= 0; i--)
{
    result += str[i];
}

console.log(result);

2. Count the number of vowels in a string.

let str = "vaishu";
let count = 0;

for(i =0; i < str.length ; i++)
{
  if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u')
  {
   count += 1;
  }
 
}

console.log(count);
3. Check whether a string is a palindrome.

let str = "vyshu"

let result " ";

let str = "vyshu";
let result = " ";

for ( i =str.length - 1; i >= 0; i--)
{
    result += str[i];
}
if ( result === str){
 console.log("given string is a palindromw")
}

4. Capitalize the first letter of every word in a sentence.
5. Find the longest word in a sentence.
*/


let str = "oho";
let result = "";

for ( i =str.length - 1; i >= 0; i--)
{
    result += str[i];
}
if ( result == str){
 console.log("given string is a palindrome");
}
else{
    console.log("the string is not a palindrome");
}










