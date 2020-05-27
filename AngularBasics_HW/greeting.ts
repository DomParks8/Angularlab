function sayHello(person: string): string {
  return "Hello, " + person;
}
var user = "Super Student";
document.getElementById("para").innerHTML = sayHello(user);

//Interface
interface IPersonOptions {
  firstName: string;
  lastName: string;
  age?: number;
  phoneNumber?: number;
  state?: string;
  zipCode?: number;
  occupation?: string;
}

class Person implements IPersonOptions {
  firstName: string;
  lastName: string;
  age: number;
  phoneNumber: number;
  state: string;
  zipCode: number;
  occupation: string;
  hourlyWage: number;
  numHours: number;
  certifications: string[] = [];

  constructor(
    firstName: string,
    lastName: string,
    age?: number,
    phoneNumber?: number,
    state?: string,
    zipCode?: number,
    occupation?: string,
    hourlyWage?: number,
    numHours?: number
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.phoneNumber = phoneNumber;
    this.state = state;
    this.zipCode = zipCode;
    this.occupation = occupation;
    this.hourlyWage = hourlyWage;
    this.numHours = numHours;
  }

  // Extra Methods
  fullName(): string {
    return this.firstName + " " + this.lastName;
  }

  nameAge(): string {
    return this.firstName + " is " + this.age + " years old";
  }

  location(): string {
    return "STATE: " + this.state + ", ZIPCODE: " + this.zipCode;
  }

  nameOccupation(): string {
    return this.firstName + " is a " + this.occupation;
  }

  allDetails(): string {
    return (
      "NAME: " +
      this.firstName +
      " " +
      this.lastName +
      "\nAGE: " +
      this.age +
      "\nPHONE NUMBER: " +
      this.phoneNumber +
      "\nSTATE: " +
      this.state +
      "\nZIPCODE: " +
      this.zipCode +
      "\nOCCUPATION: " +
      this.occupation
    );
  }

  //hourlyWage Function
  weeklyWage(numHours: number = 40): string {
    return (
      "Name: " +
      this.firstName +
      " " +
      this.lastName +
      ", Weekly Wage: $" +
      this.hourlyWage * numHours
    );
  }
  //Certifications function
  addCerts(...certifications: string[]) {
    this.certifications.push(...certifications);
    return "Certifications: " + this.certifications;
  }
  // just like string, number, any you must return the 'type' you want after the arguement. In this case 'Person'
  static addEmployee(config: IPersonOptions): Person {
    return new Person(config.firstName, config.lastName); // // require properties must be included : firstName and lastName
  }
}

let employee1 = new Person(
  "Sarah",
  "Lee",
  24,
  3361234567,
  "NC",
  27455,
  "Cashier",
  9,
  null
);
document.getElementById("para2").innerHTML = employee1.allDetails();

let employee2 = new Person(
  "Dana",
  "Delancey",
  30,
  7042034493,
  "NC",
  27264,
  "Front-End Developer",
  35,
  37
);
document.getElementById("para3").innerHTML = employee2.allDetails();

let employee3 = new Person(
  "Rafeena",
  "Usman",
  30,
  7044557645,
  "NC",
  28173,
  "Project Manager",
  45,
  45
);
document.getElementById("para4").innerHTML = employee3.allDetails();

let employee4 = new Person(
  "Yami",
  "Gorfu",
  35,
  901324775,
  "NC",
  27263,
  "Sr Developer",
  40,
  28
);
document.getElementById("para5").innerHTML = employee4.allDetails();

let employee5 = new Person(
  "Elijah",
  "Davila",
  27,
  3367466656,
  "NC",
  28173,
  "Scrum Master",
  47,
  26
);
document.getElementById("para6").innerHTML = employee5.allDetails();

document.getElementById("cert").innerHTML = employee1.addCerts("MD", " MBA");
document.getElementById("wage1").innerHTML = employee1.weeklyWage(
  this.numHours
);

document.getElementById("person").innerHTML = Person.addEmployee({
  firstName: "Melina",
  lastName: "Alejos",
}).fullName();
