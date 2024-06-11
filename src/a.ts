// const user = {
//     firstName: "prabhakar",
//     lastName: "singh",
//     email: "xyz@ymail.com",
//     age:21
// }

// function isLegal(user: {         
//     firstName: string,
//     lastName: string,         // if we again want to the user value again we have to define all the types again 
//     email: string,            // so we use iterface to get all this code gaian and again
//     age: number
// }): boolean{
//     if(user.age>18){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

interface User{
    firstName: string,
    lastName: string,         
    email: string,            
    age: number,
    phone?: number,      // t is an optional either we pass it or not it not gives an error
}

const user = {
    firstName: "prabhakar",
    lastName: "singh",
    email: "xyz@ymail.com",
    age:21
}

function isLegal(user: User): boolean{
    if(user.age>18){
        return true;
    }
    else{
        return false;
    }
}

const valuee = isLegal(user);
console.log(valuee);