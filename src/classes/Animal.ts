abstract class Animal{
    constructor(){
console.log("Inside the constructor of Animal class");
    }

abstract noOfLegs:number;
abstract noOfEyes:number;
abstract noOfNose:number;
abstract noOftails:number;

abstract behaviourOfEating():void;

runningBehaviour=()=>{
    console.log("Animals runs faster");
}

}

export default Animal;