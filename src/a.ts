interface User {
  name:string;
  age: number;

}

function sumOfage(user1:User, user2:User){
  return user1.age + user2.age;
}

const age = sumOfage({name:'Taro',age:20},{name:'jiro',age:30});
console.log(age);