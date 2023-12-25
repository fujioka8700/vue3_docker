// const fun = <T>(args: T): T => args;
const fun = <T extends string | number | User>(args: T): T => args;

//Interface
interface User {
    name: string;
    age: number;
}

//型エイリアス
// type User = {
//     name: string;
// };

let result3 = fun<string>("John Doe");

console.log(result3);

let result4 = fun<User>({ name: "aaa", age: 20 });

console.log(result4);
