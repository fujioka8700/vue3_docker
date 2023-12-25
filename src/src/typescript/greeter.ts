// const fun = <T>(args: T): T => args;
const fun = <T extends string | number>(args: T): T => args;

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
