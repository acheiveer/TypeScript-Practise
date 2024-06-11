 function sum(a: number, b: number): number  //we donot need to add number expilicity function automatic understand it as return number due to Type inference
 {     
   return a+b;
 };

const value = sum(1,2);
console.log(value);

function isLegal(age: number){
    if(age>18){
        return true;
    }
    else{
        return false;
    }
}

// const x = isLegal(18);
const x: boolean = isLegal(18); // we donot need to add bollean expilicity x automatic understand it as boolean due to Type inference

