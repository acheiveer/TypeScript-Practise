type Person = {
    name: string,
    age: number,
    phone: number
}


interface Person {
    name: string,
    age: number,
    phone: number
}

// both type and interface are same only interface is used to implement classes
// in most cases we uses interfaces



// Example
type StringOrNumber = string | number | boolean;  // types let you define multiple types

function printId(id: StringOrNumber) {
  console.log(`ID: ${id}`);
}

printId(101); // ID: 101
printId("202"); // ID: 202
printId(true);


// we can also create a type that has every property of multiple types/ interfaces
type Employee = {
    name: string;
    startDate: Date;
  };
  
  type Manager = {
    name: string;
    department: string;
  };
  
  type TeamLead = Employee & Manager;
  
  const teamLead: TeamLead = {
    name: "harkirat",
    startDate: new Date(),
    department: "Software developer"
  };
  