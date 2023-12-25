// function fun<T>(args: T): T {
//     return args;
// }

//アロー関数で記述した場合
const fun = <T>(args: T): T => args;

let result = fun<string>("Hello World");
let result2 = fun<number>(200);

console.log(result);
console.log(result2);

let result3 = fun<{ name: string }>({ name: "John Doe" });
console.log(result3);
