const user = {
    firstName: "John",
    lastName: "Doe",
    address: {
        prefecture: "Tokyo",
    },
} as const;

user.address.prefecture = "Chiba"; //Error

console.log(user);
//
// const user: {
//     readonly firstName: "John";
//     readonly lastName: "Doe";
//     readonly address: {
//         readonly prefecture: "Tokyo";
//     };
// };
