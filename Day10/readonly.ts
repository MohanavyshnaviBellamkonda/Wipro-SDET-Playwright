// const user = {
//     id: 21,
//     name: "Vyshu",
//     age: 22
// } as const;

// // user.name = "Arush"
// console.log(user);


interface Task {
    readonly title: string;
    completed: boolean;
}

const myTask: Readonly<Task> = {
    title: "Homework",
    completed: true
}

const myTask1: Task = {
    title: "Homework",
    completed: true
}

// myTask.completed = false;

console.log(myTask);
console.log(myTask1);

const scores: ReadonlyArray<number> = [10, 20, 30];
console.log(scores[0]);