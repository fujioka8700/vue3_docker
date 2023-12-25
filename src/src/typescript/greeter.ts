const person = {
    name: "John Doe",
    age: 30,
};

const user: keyof typeof person = "name";
//const user: name | age
console.log(user);
