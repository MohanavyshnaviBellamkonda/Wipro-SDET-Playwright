/*
//Basic function to greet 
function greet(name:string) : any
{
    console.log(`Hello , ${name}`);
}

const message : string = greet("vyshu");
console.log(message);

import { count } from "node:console";

//Calculator Function
function calc(a:number, b:number, oper:string) : number 
{
    if(oper == '+')
    {
        return a + b;
    }
    else if(oper == '-')
    {
        return a - b ;
    }
    else if(oper == '*')
    {
        return a * b;
    }
    else
    {
        return a/b;
    }
}

const operation : number =calc(5,10,'+');
const operation1 : number = calc(9,15, '-');
console.log(operation);
console.log(operation1); 

//count values

function vowels(word : string): number{
    let i : string | number ;
    var count : number = 0;
    for(i =0;i <word.length ; i++)
    {
        if(word[i] == "a" || word[i] == "e" || word[i] == "i" || word[i] == "o" || word[i]   == "u"){
            count += 1;
        }
    }
    return count; ;
}

const count1 : number = vowels("vaishu");
console.log(count1);
*/