import Animal from "./Animal";

class Lion extends Animal{
    behaviourOfEating(): void {
        console.log("Lion hunts the other animals and eats them");
    }
    noOftails: number =1;
    noOfLegs: number =4;
    noOfEyes: number =2;
    noOfNose: number =1;
    constructor(){
        
        super();
console.log("Inside the constructor of Lion Class");
    }
}
export default Lion;