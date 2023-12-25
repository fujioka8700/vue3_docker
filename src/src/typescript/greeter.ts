const getValue = (format: boolean): string | number => {
    return format ? "10" : 10;
};

console.log(typeof getValue(true));
// const value = getValue(true) as string;
const value = <string>getValue(true);
const digit = value.length;
console.log(digit);
