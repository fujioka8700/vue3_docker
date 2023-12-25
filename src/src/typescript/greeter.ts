let firstName = "John";
let price = 20;
let user = {
    firstName: "John",
    lastName: "Doe",
};

type Name = typeof firstName;
type Price = typeof price;
type User = typeof user;

let lastName: Name = "Tarou";

console.log(lastName);

const person: User = {
    firstName: "Jane",
    lastName: "Doe",
    age: 20, // Error
};

console.log(person);
