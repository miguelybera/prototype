class Student{
    constructor(name, course, section){
        this.name = name;
        this.course= course;
        this.section = section;
    }

    static enroll(subject){
        console.log(`${this.name} is enrolled in ${subject}`);
    }
}
let stud1 = new Student("Juan Dela Cruz", "Nursing", "1Nu2")
Student.enroll("Biology");