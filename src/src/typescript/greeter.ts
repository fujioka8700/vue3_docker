interface Person {
    firstName: string;
    lastName: string;
    greeting?: (message: string) => string;
}

class User {
    protected firstName: string;
    lastName: string;
    constructor(peron: Person) {
        this.firstName = peron.firstName;
        this.lastName = peron.lastName;
    }
    fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Admin extends User {
    isAdmin: boolean;
    constructor(person: Person, isAdmin: boolean) {
        super(person);
        this.isAdmin = isAdmin;
    }
    yourFirstName(): void {
        console.log(this.firstName);
    }
}

const personJohn: Person = {
    firstName: "John",
    lastName: "Smith",
    greeting(message: string) {
        return `${message} ${this.firstName}`;
    },
};

const userJohn = new User(personJohn);
console.log(userJohn.fullName());

const personTanaka: Person = {
    firstName: "Tanaka",
    lastName: "Tarou",
};

const userTanaka = new Admin(personTanaka, true);
console.log(userTanaka.fullName());
userTanaka.yourFirstName();
