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

type Hello = (name: string) => string;
type Hello2 = { (name: string): string };
interface Hello3 {
    (name: string, age: number): string;
}

const hello: Hello3 = (name: string, age: number): string => {
    return "Hello!! " + name + `さんは${age}才です。`;
};

console.log(hello("田中", 15));
