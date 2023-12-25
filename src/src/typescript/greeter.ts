type User = {
    name: string;
    age: number;
};

function getValue<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}
let user: User = { name: "John Doe", age: 24 };
console.log(getValue<User, keyof User>(user, "name")); // "John"
