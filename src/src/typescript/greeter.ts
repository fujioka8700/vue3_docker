interface Person {
    readonly firstName: string;
    lastName: string;
}

class Student implements Person {
    public firstName: string;
    public lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const student = new Student("Tanaka", "Tarou");
student.firstName = "Jane";
console.log(student.firstName);
