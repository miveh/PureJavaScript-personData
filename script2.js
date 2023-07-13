const prompt = require("prompt-sync")({ sigint: true });
let obj = {
  name: "",
  age: 0,
  profileBoolean: false,
  salary: 0,
};
let personArray = [];

while (true) {
  /*get person data from user system*/
  let userInput = prompt("push person info: ");
  let userInputList = userInput.split(","); //Name, Age, no, Salary

  if (userInput) {
    //کاربر مقدار خالی وارد کند برنامه متوقف شود
    /*create new person object*/
    let person = { ...obj };

    /*assign values into person object*/
    person.name = userInputList[0];
    person.age = Number(userInputList[1]);
    person.profileBoolean = Boolean(userInputList[2]);
    person.salary = Number(userInputList[3]);

    personArray.push(person);
    console.log(personArray);
  } else break;
} //end while

/*sort by age*/
console.log(
  personArray.sort((p1, p2) => (p1.age < p2.age ? 1 : p1.age > p2.age ? -1 : 0))
);
/*max salary*/
console.log(
  personArray.sort((p1, p2) =>
    p1.salary < p2.salary ? 1 : p1.salary > p2.salary ? -1 : 0
  )[0].name
);
/*average salaries*/
let sum = 0;
personArray.forEach((person) => {
  sum += person.salary;
});
console.log("average salaries of person : " + sum / personArray.length);
personArray.forEach((element) => {
  !element.profileBoolean
    ? "there is a profile without image"
    : "all profiles have image";
});
//https://bobbyhadz.com/blog/javascript-convert-array-to-object
//https://www.scaler.com/topics/javascript-sort-an-array-of-objects/
