const fun = <T>(args: T): T => args;

//Interface
interface User {
    name: string;
}

//型エイリアス
// type User = {
//     name: string;
// };

let result3 = fun<User>({ name: "John Doe" });

console.log(result3);
