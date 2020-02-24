let stud1 = {name:"Pedro Cruz" , course:"CS", section:"2csb" };
let stud2 = {name:"Pepe Smith" , course:"Architecture", section:"lar5"};




let displayInfo = function(){
    document.write(`<h2> ${this.name}, ${this.course} is enrolled in section ${this.section}`);
}

displayInfo.call(stud1);
displayInfo.call(stud2);