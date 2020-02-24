let stud1 = {
    name : "Pedro Cruz"
}
let stud2 = {
    name :"Pepe Smith"
};
info = ["2ITB", "IT"];



let displayInfo = function(section, course){
    document.write(`<h2> ${this.name}, ${course} is enrolled in section ${section}`);
}

displayInfo.apply(stud2, info);