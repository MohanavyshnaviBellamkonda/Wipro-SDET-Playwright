/*
1)The Generic API Wrapper
Scenario: You need a reusable function to fetch data that automatically types the response.
Task: Write a generic function fetchData<T>(url: string): Promise<T>. It should use the fetch API, check if the response is okay, and return the JSON parsed as type T. Test it by creating an Album interface and fetching data from a mock URL.


2)Record Mapping for Configuration
Scenario: You are managing feature flags or permissions for specific user roles.
Task: Define an enum Role { Admin, Editor, Guest }. Use the Record utility type to create a variable PermissionMap where every Role must be mapped to a boolean value. 
If a role is missing from the object, TypeScript should throw an error


enum Role {
    Admin = "Admin",
    Editor = "Editor",
    Guest = "Guest"
}   
type PermissionMap = Record<Role, boolean>;

const permissions: PermissionMap = {
    [Role.Admin]: true,
    [Role.Editor]: false,
    [Role.Guest]: false
};      

console.log(permissions);


3)Exhaustiveness Checking (The never Type)
Scenario: You want to ensure that if a new member is added to a Union, your logic must be updated to handle it.
Task:
Create a union type TaskStatus = 'Open' | 'InProgress' | 'Closed'.
Write a function handleTask(status: TaskStatus) using a switch statement.
In the default case, assign the status to a variable of type never.
The Test: Add 'Archived' to the union and verify that the code fails to compile until you add the new case.


type TaskStatus = 'Open' | 'InProgress' | 'Closed';

function handleTask(status: TaskStatus){
    switch(status){
     case "Open":
            console.log("Task is open");
            break;
        case "InProgress":
            console.log("task is inprocess")
            break;
        case "Closed":
            console.log("Task is closed");
            break;
        default:
            const neverStatus: never = status;
            throw new Error(`Unhandled task status: ${neverStatus}`);
            
    }
}


const statuses: TaskStatus[] = ['Open', 'InProgress', 'Closed'];

for (const s of statuses) {
  handleTask(s);
}

4)Recursive Navigation Type
Scenario: You are building a tree structure for a file system or a sidebar menu.
Task: Define a type FolderNode that has a name: string. It should also have an optional files: string[] and an optional subFolders property, which is an array of FolderNode objects.

type FolderNode = {
  name: string;
  files?: string[];
  subFolders?: FolderNode[];
};

const folder: FolderNode = {
  name: "Day 10",
  files: ["omit.ts", "partial.ts"],
  subFolders: [
    {
      name: "Images",
      files: ["logo.png"],
    },
    {
      name: "Docs",
      files: ["readme.md"],
    },
  ],
};

console.log(folder);
5. Template Literal Types for CSS
Scenario: You are building a UI library and want to strictly enforce unit types for a "spacing" prop.
Task: Create a type MarginValue that only allows strings ending in "px", "rem", or "vh" (e.g., "10px", "2rem"). Use Template Literal Types to ensure a number must precede the unit.


type MarginValue = `${number}px` | `${number}rem` | `${number}vh`;

let margin1: MarginValue = "10px";
let margin2: MarginValue = "2rem";
let margin3: MarginValue = "50vh";



console.log(margin1);
console.log(margin3);

6.Conditional Types & the infer Keyword
Scenario: You are working with a library that returns data wrapped in a Promise, and you need to extract the underlying type.
Task: Create a utility type UnwrapPromise<T>. It should check if T is a Promise. If it is, use the infer keyword to return the type the promise resolves to; otherwise, return T itself.

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;


function printValue<T>(value: T): UnwrapPromise<T> {
  return value as UnwrapPromise<T>;
}


const text: UnwrapPromise<Promise<string>> = "Vyshu";
console.log(text);


const num: UnwrapPromise<Promise<number>> = 10;
console.log(num);


const bool: UnwrapPromise<boolean> = true;
console.log(bool);

7.The Union Manipulation Puzzle
Scenario: You have a massive union of possible events but need to categorize them for specific handlers.
Task: Given type AllEvents = 'click' | 'dbclick' | 'submit' | 'reset' | 'keypress'.
Use Extract to create MouseEvents (only click and dbclick).
Use Exclude to create NonFormEvents (everything except submit and reset).

type AllEvents = "click" | "dbclick" | "submit" | "reset" | "keypress";

type MouseEvents = Extract<AllEvents, "click" | "dbclick">;

type NonFormEvents = Exclude<AllEvents, "submit" | "reset">;


let a: MouseEvents = "click";
console.log(a);

let b: NonFormEvents = "keypress";
console.log(b);
