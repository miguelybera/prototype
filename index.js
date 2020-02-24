class Student{
    setName(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
    setSection(section){
        this.section = section;
    }
    getSection(){
        return this.section;
    }
    setCourse(course){
        this.course = course;
    }
    getCourse(){
        return this.course;

    }

    showInfo(){
        console.log(`${this.name}, ${this.course} is enrolled in section ${this.section}`);
    }
}
let stud = new Student();
stud.setName("Juan Dela Cruz");
stud.setCourse("Engineering");

stud.setSection("2CE6");
console.log(stud.getName());
stud.showInfo();
