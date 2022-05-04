const Person = { 
     firstName : "Mykel", 
     lastName : "Barua",
    id : 2333,
    fullName : function(){
        return this.firstName + " " + this.lastName;
    },
}

const Person1 = {
    firstName : "Jasim",
    lastName : "Uddin",
}
console.log(Person.fullName());
console.log(Person.fullName.call(Person1));