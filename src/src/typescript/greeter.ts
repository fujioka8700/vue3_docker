interface Person {
    firstName: string;
    age: number;
}

interface Person {
    lastName: string;
    age: number;
}

const user: Person = {
    firstName: "John",
    lastName: "Doe",
    age: 10,
};

console.log(user);
