function funs<T, U>(arg1: T, arg2: U): [T, U] {
    return [arg1, arg2];
}
let result4 = funs<string, number>("Hello", 100);
console.log(result4);
//結果
// ["Hello", 100];
