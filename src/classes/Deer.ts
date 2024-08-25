import Animal from "./Animal";

class Deer extends Animal{
    noOfLegs: number = 4;
    noOfEyes: number = 2;
    noOfNose: number =1;
    noOftails: number =1;
    behaviourOfEating(): void {
        console.log("Deer is pure vegetarian Animal");
    }
    constructor(){
        super();
        console.log("Inside the constructor of Deer class");
    }
}
export default Deer;