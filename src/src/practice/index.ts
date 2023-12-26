type User = {
    [key: string]: string;
};

const user: User = {
    firstName: "John",
    lastName: "Doe",
};

console.log(user);

user.middlename = "M";
console.log(user);

user["hobby"] = "Fishing";
console.log(user);
