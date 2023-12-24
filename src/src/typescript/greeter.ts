type firstPerson = {
    firstName: string;
};

type lastPerson = {
    lastName: string;
};

type Person = firstPerson & lastPerson;

const user: Person = {
    firstName: "John",
    lastName: "Doe",
};

console.log(user);
