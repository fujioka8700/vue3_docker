// const firstName: string = "John Doe";

// console.log(firstName);

// const age: string = 25;

// const temp: number = -10.5;

// const isAdmin: boolean = true;

// console.log(isAdmin);

// const fruits: string[] = ["apple", "banana"];
// const fruits: Array<string | number> = ["apple", 10];

// console.log(fruits);

// const fruits: [string, number] = ["apple", 10];
// const fruits: (string | number)[] = ["apple", 10, 10];
// console.log(fruits);

// const name_1: any = undefined;
// const name_2: any = null;
// const name_3: any = "suzuki";

// console.log(name_3);

// type Hello = (name: string) => string;
// type Hello2 = { (name: string): string };
// interface Hello3 {
//     (name: string, age: number): string;
// }

// const hello: Hello3 = (name: string, age: number): string => {
//     return "Hello!! " + name + `さんは${age}才です。`;
// };

// console.log(hello("田中", 15));

// type User = {
//     id: number;
//     name: string;
// };

// interface User2 {
//     id: number;
//     name: string;
// }

// const user: {
//     id: number;
//     name: string;
// } = {
//     id: 100,
//     name: "John Doe",
// };

// const user: User = {
//     id: 100,
//     name: "John Doe",
// };

// console.log(user);

// オプショナル（任意）プロパティ
// const user: {
//     id: number;
//     name?: string;
// } = {
// id: 100,
// name: "John Doe",
// };

// console.log(user);

// readonly プロパティ
// const user: {
//     id: number;
//     readonly name: string;
// } = {
//     id: 100,
//     name: "John Doe",
// };

// user.id = 200;
// user.name = "tanaka";

// console.log(user);

interface Person {
    firstName: string;
    lastName: string;
    age?: number | null;
    greeting: (message: string) => string;
}

function greeter(person: Person): string {
    return `Hello!! ${person.firstName} ${person.lastName}`;
}

const user: Person = {
    firstName: "田中",
    lastName: "太郎",
    age: 15,
    greeting(message) {
        return `${message}, ${this.firstName}`;
    },
};

document.body.textContent = greeter(user);
if (user.greeting) {
    console.log(user?.greeting("Hello"));
}
console.log(user?.age);
