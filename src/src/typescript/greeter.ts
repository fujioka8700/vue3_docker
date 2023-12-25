type KeyPair<T, U> = {
    key: T;
    value: U;
};

const kv1: KeyPair<number, string> = { key: 1, value: "Steve" };

console.log(kv1);

const kv2: KeyPair<number, number> = { key: 1, value: 1000 };

console.log(kv2);

const kv3: KeyPair<string, string[]> = {
    key: "10",
    value: ["John", "Steve", "Jane"],
};

console.log(kv3);
