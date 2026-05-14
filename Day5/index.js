async function getData() {
    const sum = 2 + 2;
    return await new Promise((resolve, reject) => {
        if(2 < 3) {
            setTimeout(() => {
                resolve("Data received");
            }, 2000);
        } else {
            reject('not working')
        }
    });
}
 
async function getTodos(url) {
    let data = await fetch("https://jsonplaceholder.typicode.com/todos"); // cursor is blocked in this line
    data = data.json();
    return data;
}
 
getTodos().then(data => console.log(data));
 /*
//Instead of using then , we use async and await functions to excecute asynchronous functions as synchronous
// fetch("https://jsonplaceholder.typicode.com/todos")
//     .then(res => res.json()) // res -> string -> json)
//     .then(data => data.filter(d => d.id % 2 === 0))
//     .then(data => data.map(d => (d.title = "Aaryan " + d.title)))
//     .then(data => console.log(data))
//     .catch(error => console.error("Error fetching data:", error));
 
// getData().then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.error("Error:", error);
// });
 
// setTimeout(() => {
//     console.log("Data received");
// }, 5000);
// console.log("test");
 
// setInterval(() => {
//     console.log("Checking for new data...");
// }, 3000);

//To close the timeout and interval, we have functions like close interval and close timeout

const timeoutId = setTimeout(() => {
    console.log("Data received");
}, 5000);
console.log("test");
 
clearTimeout(timeoutId);
 
const i = setInterval(() => {
    console.log("Checking for new data...");
}, 3000);
 
clearInterval(i); */


 