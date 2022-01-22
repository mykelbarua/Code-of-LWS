function Calculator(firstValue, secondValue){
    
    this.firstValue = firstValue;
    this.secondValue = secondValue;

}

Calculator.prototype = {
    add(){
        console.log("Summation of values is: " + (this.firstValue + this.secondValue));
    },
    subtract(){
        console.log("Subtraction of values is: " + (this.firstValue - this.secondValue));
    },
    multiplication(){
        console.log("Multiplication of values is: " + (this.firstValue * this.secondValue));
    },
    divide(){
        console.log("Division of Values is: " + (this.firstValue / this.secondValue));
    }
}

const calculationOne = new Calculator(35, 46);
calculationOne.add();
calculationOne.subtract();
calculationOne.multiplication();
calculationOne.divide();