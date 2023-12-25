type PersonFirst = {
    firstName: string;
    age: number;
    height: number;
};

interface PersonLast {
    lastName: string;
    age: number;
    weight: number;
}

type Person = PersonFirst & PersonLast;

const user: Person = {
    firstName: "John",
    lastName: "Doe",
    age: 10,
    weight: 60,
    height: 170,
};

console.log(user);
