interface User {
  id: string;
  name: string;
  age: string;
  email: string;
  password: string;
};

type UpdateProps = Pick<User, 'name' | 'age' | 'email'>

type UpdatePropsOptional = Partial<UpdateProps>

function updateUser(updatedProps: UpdatePropsOptional) {
  const {name,email}= updatedProps;
  // hit the database tp update the user
  console.log(`Name: ${name}, Email: ${email}`);
}
updateUser({name:'prabhakar',email:'xyz@ymail.com'})