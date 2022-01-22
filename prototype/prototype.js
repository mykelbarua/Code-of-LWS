function Person(name, age){
    this.name = name;
    this.age = age;

    // this.sleep = function(){
    //     console.log(this.name + ` is sleeping!`);
    // }
}

Person.prototype = {
    eat(){
        console.log(this.name + " is eating!");
    },
    sleep(){
        console.log(this.name + " is sleeping!");
    },
    play(){
        console.log(this.name + " is playing!");
    }
}

const piash = new Person("Piash", 20);

console.log(Person.prototype);
piash.sleep();

const monon = new Person("Monon", 21);
monon.play();
