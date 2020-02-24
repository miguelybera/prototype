function Student(name, section, course){

    this.name = name;
    this.section = section;
    this.course = course;

}

let stud1 = new Student("Cathy Garcia", "2ITB", "IT");
let stud2 = new Student("Pedro Morales", "2ITE", "IT");

Student.prototype.school = "UST";
Student.prototype.study = function(subject){
    console.log(`${this.name} is enrolled in ${subject}`)
}

console.log(`${stud2.name} is studying in ${stud2.school}`)
stud1.study("ICS2609");