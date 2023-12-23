interface Person {
    firstName: string;
    lastName: string;
    greeting: (message: string) => string;
}

class User {
    private firstName: string;
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

user.firstName = "tanaka";
console.log(user.fullName());
