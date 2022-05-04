const person = function(){
    return "hello World";
}
console.log(person());

const  person2 = () => {
    return "Hello World";
}
console.log(person2());

const person3 = () => "It can be use only for one line return statement";
console.log(person3());

const person4 = (val) =>{
    return "using variable in " + val;
}
console.log(person4("arrowFunction Statement"));

const person5 = val => {
    return "Parantheses can be avoid in isingle parameter in " + val;
}
console.log(person5("arrowFunction Statement"));


// for this, arrowfunction and regular works diffrently
let btn =  document.getElementById('btn');
let show = document.getElementById('show');

// let hello = function(){
//     show.innerHTML += this;
// }

let hello = () => {
    show.innerHTML += this;
}

window.addEventListener('load', hello);
window.btn.addEventListener('click', hello);