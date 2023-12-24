interface Person {
    firstName: string;
    lastName: string;
    greeting?: (message: string) => string;
}

class User {
    protected firstName: string;
    protected lastName: string;
    constructor(peron: Person) {
        this.firstName = peron.firstName;
        this.lastName = peron.lastName;
    }
    public fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Admin extends User {
    constructor(person: Person, private isAdmin: boolean) {
        super(person);
        this.isAdmin = isAdmin;
    }
    public yourFirstName(): void {
        console.log(this.firstName);
    }
    public confirmAdmin(): boolean {
        return this.isAdmin;
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
// userTanaka.firstName = "TANAKAZ";
console.log(userTanaka.fullName());
userTanaka.yourFirstName();

console.log(userTanaka.confirmAdmin());
