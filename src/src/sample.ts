import type { funcType } from "./App.vue";

const hoge: funcType = <T>(val: T): void => {
    console.log(val);
};

hoge("こんにちは");
