interface User {
  firstName: string;
  lastName: string;
  age: number;
  email?: string;
}

function isLegal_(user: User): boolean {
  if (user.age >= 18) {
    return true;
  } else {
    return false;
  }
}

function greet_(user: User): string {
  return "Hello, " + user.firstName + "!";
}

isLegal_({ firstName: "Raj", lastName: "Singh", age: 21 });
