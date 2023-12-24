interface firstPerson {
    firstName: string;
}

interface lastPerson {
    lastName: string;
}

interface Person extends firstPerson, lastPerson {}

const user: Person = {
    firstName: "John",
    lastName: "Doe",
};

console.log(user);
