const user = {
    firstName: "John",
    lastName: "Doe",
} as const;

// user.firstName = "Jane"; // readonly

type User = typeof user;

type Admin = {
    isAdmin: boolean;
};

type adminUser = User & Admin;

const specialUser: adminUser = {
    firstName: "John",
    lastName: "Doe",
    isAdmin: true,
};

console.log(specialUser);

//　結果
// type User = {
//     readonly firstName: "John";
//     readonly lastName: "Doe";
// };
