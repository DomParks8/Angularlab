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
  "Thomas",
  "Person",
  32,
  7048876989,
  "NC",
  28027,
  "Cashier",
  9,
  null
);
document.getElementById("para2").innerHTML = employee1.allDetails();

let employee2 = new Person(
  "Katie",
  "Thomas",
  19,
  7043527685,
  "NC",
  28027,
  "Chicken Wrangler",
  35,
  37
);
document.getElementById("para3").innerHTML = employee2.allDetails();

let employee3 = new Person(
  "Mike",
  "Jones",
  30,
  2813308004,
  "NC",
  28027,
  "Project Manager",
  37,
  45
);
document.getElementById("para4").innerHTML = employee3.allDetails();

let employee4 = new Person(
  "Jimmy",
  "Neutron",
  35,
  9807654321,
  "NC",
  28027,
  "Manager",
  40,
  28
);
document.getElementById("para5").innerHTML = employee4.allDetails();

let employee5 = new Person(
  "Peyton",
  "Manning",
  27,
  9103224675,
  "NC",
  28027,
  "QB",
  47,
  26
);
document.getElementById("para6").innerHTML = employee5.allDetails();

document.getElementById("cert").innerHTML = employee1.addCerts("MD", " MBA");
document.getElementById("wage1").innerHTML = employee1.weeklyWage(
  this.numHours
);

document.getElementById("person").innerHTML = Person.addEmployee({
  firstName: "Steven",
  lastName: "Tillman",
}).fullName();
