interface Person {
    firstName: string;
    lastName: string;
    greeting: (message: string) => string;
}

class User {
    firstName: string;
    lastName: string;
    constructor(peron: Person) {
        this.firstName = peron.firstName;
        this.lastName = peron.lastName;
    }
    fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

let peron: Person = {
    firstName: "John",
    lastName: "Smith",
    greeting(message: string) {
        return `${message} ${this.firstName}`;
    },
};

const user = new User(peron);

console.log(user.fullName());

peron.firstName = "tanaka";
console.log(peron.greeting("Hello!!"));
console.log(user.fullName());
