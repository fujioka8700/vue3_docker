const fruits = ["apple", "banana", "lemon"] as const;
type Fruit = (typeof fruits)[number];
//結果
// string[]
const buyFruit: Fruit = "banana";
console.log(buyFruit);

// const fruits = [1, 100, 2];
// type Fruit = typeof fruits;
//結果
// number[]

// const fruits = [100, 'banana', 'lemon'];
// type Fruit = typeof fruits;
//結果
// (string|number)[]
