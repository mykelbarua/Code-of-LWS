class Calculator{
    constructor(numberOne, numberTwo){

        this.numberOne = numberOne;
        this.numberTwo = numberTwo;

    }

    add(){
        console.log("Summation is: " + (this.numberOne + this.numberTwo));
    }
    
    subtract(){
        console.log("Subtraction is: " + (this.numberOne - this.numberTwo));
    }

    multiply(){
        console.log("Multiplication is: " + (this.numberOne * this.numberTwo));
    }

    divide(){
        console.log("Division is: " + (this.numberOne / this.numberTwo));
    }
}

const calculationOne = new Calculator(50, 24);

calculationOne.add();
calculationOne.subtract();
calculationOne.multiply();
calculationOne.divide();