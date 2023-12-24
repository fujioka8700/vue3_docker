interface Person {
    readonly firstName: string;
    lastName: string;
}

class Student implements Person {
    public readonly firstName: string;
    public lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const student = new Student("Tanaka", "Tarou");
// 更新できる
student.firstName = "Jane";
console.log(student.firstName);
