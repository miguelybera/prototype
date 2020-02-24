let stud1 = {fname: "Juan", lname:"Dela Cruz"};
let stud2 = {fname: "Pedro", lname:"Morales"};

let fullname = function(){
    return this.fname +" "+this.lname;

    
}
let x = fullname.bind(stud2);
    console.log(x());