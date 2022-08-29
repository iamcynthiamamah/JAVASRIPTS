"use strict"; //having this as the first statement of the script activates the script mode of script
//strict modes creates visible errors and prevents us from introduce bugs in our code by preventing us from doing certain things

let hasLicense = false;
const passTest = true;

if (passTest) hasLicense = true;
if (hasLicense) console.log("I can drive :D");

/*--SECTION 3: FUNCTIONS----------*/

//FUNCTION DEFINITION
function logger() {
  console.log("My name is Jonas");
}

//FUNCTION CALLING
logger(); //will print the output of the function 'logger'
logger();
logger(23); //the 23 i.e the argument is USELESS in this case, hence the function 'logger' does not accept a parameter

//FUNCTION WITH PARAMETERS
function fruitProcessor(apples, oranges) {
  //console.log(apples, oranges);
  const juice = `juice with ${apples} apples and ${oranges} oranges. `;
  return juice;
}

let names = "cynthia";
const appleJuice = fruitProcessor(names, 6); //Function calling passing 5 and 6 as arguments
console.log(appleJuice);

const orangeJuice = fruitProcessor(10, 9); //function calling passing 10 and 9 as auguments to the function fruitProcessor
console.log(orangeJuice);

/*--SECTION 4: FUNCTION DECLARATION VS FUNCTION EXPRESSION------*/

//FUNCTION DECLARATION
//a function declaration can be called before defining it
//instance 1
function caLAge1(birthYear) {
  //funtion definition
  return 2037 - birthYear; //where 2037 rep. the current year
}

const ageNow = caLAge1(1999); //function calling
console.log(ageNow);

//instance 2
function calAge(birthyear) {
  yearNow = 2022;
  const myAge = yearNow - birthyear;
  return myAge;
}

//FUNCTION EXPRESSION
//in function expressions, function can only be called after it's definition
const calAge2 = function (
  birthyeah //the function has no 'function name' rather it is stored in a variable in this case, the variable name is calAge2
) {
  return 2040 - birthyeah;
};

const age2 = calAge2(1991); //in calling function expression, the variable name becomes the function name
console.log(ageNow, age2);

/*--SECTION 5: ARROW FUNCTION----*/

//here we dont need the {} and the 'retun' happens implicitely without us having to explicitely write the 'return'. hence it's lot easier.

//FOR ONE PARAMETER AND ONE LINE OF CODE
const calAge3 = (birthyear) => 2040 - birthyear; //the birthyear be4 => is the parameter
const age3 = calAge3(1991); //function calling: here the age3 is the variable to hold the return vslue of the arrow function above, hence arrow function implicitely returns a value. the 1999 is the argument for the birthyear
console.log(age3);

//  FOR ONE PARAMETER AND MULTIPLE LINE OF CODES:
const retirementAge = (yearOfBirth) => {
  const myAge = 2037 - yearOfBirth;
  const retires = 65 - myAge;
  return retires; //the return is ommited only in case of one-line function
};

console.log(retirementAge(1991));

//FOR MULTIPLE PARAMETER AND MULTIPLE LINES OF CODES
const retireswhen = (birTHyear, firstNamee) => {
  const agENow = 2022 - birTHyear;
  const retire = 65 - agENow;
  return `${firstNamee} retires in ${retire} years`;
};

console.log(retireswhen(1998, "Cynthia"));

/*--SECTION 6: FUNCTION CALLING OTHER FUNCTIONS ----------*/

function cutFruitPieces(fruit) {
  //a function cutFruitPieces that accapets fruit as argument and multiply it by 4
  return fruit * 4;
}

function fruitProcessor(guava, mango) {
  //a function fruit processor
  const guavaPieces = cutFruitPieces(guava); //calling a function in a function
  const mangoPieces = cutFruitPieces(mango); //calling of cutFruitPieces function inside the fruitProcessor function

  const fruits = `juice with ${guavaPieces} piece of guava and ${mangoPieces} pieces of mangos`;
  return fruits;
}

console.log(fruitProcessor(2, 3)); //calling of the fruitProcessor function

/*---SECTION 9: ARRAYS (DATA-STRUCTURE)---------*/
//a container through which we can throw in variables and later refrenece them
//array indexing starts with '0'
const friends = ["Michael", "Steven", "Peter"]; //array declaration method1
console.log(friends);

const year = [1998, 2002, 2018, 2022];
const years = new Array(1991, 1984, 2008, "Cynthia"); //array declaration method 2. the 'new Array' is mandatory before the parenthesis
console.log(years);

console.log(friends[0]); //logging to the console the array element at index position 0
console.log(friends[2]); //logging the 3rd element to the console, that is the element at index position 2

console.log(friends.length); //the '.lenght' property is used to determine the exact number of elements in the array
console.log(year.length);
console.log(years.length); //logs to the console the lenght of the variable 'years' array

console.log(friends.length - 1); //determines the index position of the last element of an array

console.log(friends[friends.length - 1]); //to get the last element of an array

//MUTATING AN ARRAY
friends[2] = "Jay"; //will change the element of the friends array in index position 2 which is 'Peter' to 'Jay'
console.log(friends);
//NOTE: we can mmutate only a part of an array but not the whole array unless its not declared using const

//PUTTING AN EXPRESSION, VARIABLE AND ARRAY INSIDE OF AN ARRAY
const surName = "Mamah";
const aboutMe = [
  "Cynthia",
  surName,
  2022 - 1998 /*array accepts expressions*/,
  "Engineering student",
  friends /*as in friends array*/,
];
console.log(aboutMe);
//expressions in javascript produces a value

//EXERCISE
const calcAges = function (
  birthTime //function that calculates age
) {
  return 2022 - birthTime;
};

const times = [1990, 1995, 2000, 1998, 2002]; //an array of birthyears

const time1 = calcAges(times[0]); //calling the calcAges function to calculate the age of the element in the '0th' index position of the time array
const time2 = calcAges(times[3]); //function calling for the times array element with index position 3
const time3 = calcAges(times[times.length - 1]); //function calling on the last element of the times array
console.log(time1, time2, time3);

const timesArray = [time1, time2, time3]; //arrays can accept variables as elements of the array
console.log(timesArray); //displaying the times called by the calcage function as an array

/*---SECTION 10: BASIC ARRAY OPERATIONS-----------*/
//ADD ELEMENT TO THE END OF AN ARRAY
const myNames = ["Mamah", "Cynthia", "Ogechi", "Scholastica"];
myNames.push("Chima"); //the push function pushes an extra element 'Chima' to the last element of the array
//push function actually returns a value (the lenght of the new array)
//const newLenght = myNames.push('Chima');   //returns the lenght
console.log(myNames); //will output (Mamah, Cynthia, Ogechi, Chima)

//ADD ELEMENT TO THE BEGINNING OF AN ARRAY
myNames.unshift("Apeh"); //the unshift function adds an element to the beginning of an array
console.log(myNames);

//REMOVE THE LAST ELEMENT OF AN ARRAY
myNames.pop(); //nothing will be in the parenthesis hence nothing is to the added inplace of the removed element
console.log(myNames);

//REMOVE THE FIRST ELEMENT OF AN ARRAY
myNames.shift();
console.log(myNames);

//DETERMINING THE POSITION OF A CERTAIN ELEMENT IN THE ARRAY
console.log(myNames.indexOf("Cynthia")); //this wil give -1 for an element that is not in the array

//RETURNING TRUE/FALSE IF THE ELEMENT IS/IS-NOT IN THE ARRAY
console.log(myNames.includes("Cynthia")); //will give 'true' because 'Cynthia' is an element in the myNames array
console.log(myNames.includes("oge")); //will give 'false' as its not an element in the myNames
//uses strict equality. e.g '23' is not 23.

//APPLICATION
if (myNames.includes("Mamah")) {
  console.log(`Mamah is part of your name`);
} else console.log(`It is not part of your name`);

//ADDITION OF 2 ARRAYS INTO 1
const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];
const array3 = array1.concat(array2); //concatenates 2 strings into 1
console.log(array3);

/*---SECTION 12: OBJECT (DATA-STRUCTURE)-------------------*/
//objects is a type of data-structure that defines key value-pairs.
//unlike in arrays, objects use curly-braces instead of square-brackets as in the case of arrays

//ARRAY EXAMPLE
const ogesArray = [
  "Cynthia",
  "Mamah",
  2022 - 1998,
  "student",
  ["Uche", "Chima", "Jane"],
];
console.log(ogesArray);

//OBJECT REP. OF THE SAME EXAMPLE
const oge = {
  firstName: "Cynthia",
  lastName: "Mamah",
  age: 2022 - 1998,
  job: "student",
  friends: ["Uche", "Chima", "Jane"],
};
console.log(oge);
//where firstName, lastName, age, job and friends as shown above are called 'PROPERTIES OR KEYS'

//the big difference objects and arrays is that in objects the order of the values does not matter at all when we want to retrieve them, unlike arrays that are only retrieved using their order-number or index-number

/*---SECTION 13: DOT VS BRACKET NOTATION-------------------*/

const ogeObject = {
  firstName: "Cynthia",
  lastName: "Mamah",
  age: 2022 - 1998,
  job: "student",
  friends: ["Uche", "Chima", "Jane"],
};

//DOT NOTATIONS
console.log(ogeObject.firstName); //retrieves the firstname using the dot post-fix
console.log(ogeObject.friends);

//BRACKET NOTATION
console.log(ogeObject["lastName"]); //input the key as a string in a squared-bracket after the object name

const nameKey = "Name"; //a repeating or reoccuring part of the object key shown above. i.e firstName and lastName both has 'name'
console.log(ogeObject["first" + nameKey]); //you can  not do this using the dot notation
console.log(ogeObject["last" + nameKey]);

//E.G on bracket notation
// const interestedIn = prompt('what do you want to know about me? choose between firstName, lastName, job, age and friends')
// console.log(ogeObject[interestedIn]);
//NOTE: console.log(ogeObject.interestedIn) will not work because interestedIn is not part of the properties of the object 'ogeObject'

//ADDINT NEW PROPERTIES TO OBJECT
ogeObject.location = "Warri"; //adding a location to the properties usinf dot notation
ogeObject["school"] = "FUPRE"; //adding a property to the properties using bracket notation

console.log(ogeObject);

//CHALLENGE
console.log(
  `${ogeObject.firstName} has ${ogeObject.friends.length} friends, and her best friend is called ${ogeObject.friends[0]}`
);

/*---SECTION 14: OBJECT METHODS-------------------*/
//any function attatched to an object is called A METHOD

const cynthia = {
  firstName: "Cynthia",
  lastName: "Mamah",
  birthYear: 1998,
  job: "student",
  friends: ["Uche", "Chima", "Raaymi"],
  calcage: function () //function can be a property of an object
  {
    this.age = 2022 - this.birthYear;
    return this.age;
  },
};
console.log(cynthia.calcage());

// console.log(cynthia.calcage(1998));    //using the dot notation to call the function in the object 'cynthia'
// console.log(cynthia['calcage'](1998));  //using the bracket notation

//CHALLENGE
const getSummary = {
  firstName: "Jonas",
  lastName: "Schedmann",
  birthYear: 1990,
  job: "student",
  friends: ["obi", "ada", "okpara"],
  driversLicence: false,
  calage: function () {
    return 2022 - this.birthYear;
  },
  summary: function () {
    return `${this.firstName} ${
      this.lastName
    } is a ${this.calage()} years old ${this.job} with ${
      this.friends.length
    } friends: ${this.friends} and he has ${
      this.driversLicence ? "a" : "no"
    } driver's Licence`;
  },
};

console.log(getSummary.summary());

/*---SECTION 16: FOR LOOP-----------------------*/
//for(initialization; condition; increment)
//{
//loop statement
//}

for (let rep = 1; rep <= 10; rep++) {
  console.log(`lefting weights repetition ${rep}`);
}

/*---SECTION 17: LOOPING ARRAYS, BREAKING AND CONTINUING-----------*/
//for loop is handy when we know how many times the loop will run. i.e when we need a counter as for loop depends on counter variable
//LOOPING ARRAYS
//EXAMPLE1
const ogeArray = [
  //array example
  "Cynthia",
  "Mamah",
  2022 - 1998,
  "student",
  ["Uche", "Chima", "Jane"],
];
console.log(ogesArray);

const types = []; //declaring the types variable

for (
  let i = 0;
  i < ogeArray.length;
  i++ //looping through the array
) {
  console.log(ogeArray[i], typeof ogeArray[i]);

  //filling types array
  types[i] = typeof ogeArray[i];
}

console.log(types);

//EXAMPLE 2
const yeaR = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < yeaR.length; i++) {
  const age = 2022 - yeaR[i];
  ages.push(age); //add the age value to ages array
}

console.log(ages);

//CONTINUE
//continue terminates the current iteration
const yeaRs = [1991, 2007, 1969, 2020];

for (let i = 0; i < yeaRs.length; i++) {
  const ageS = 2022 - yeaRs[i];
  if (ageS !== yeaRs.lenght) continue; //continue means go back to the loop. i.e if ages != ages.lenght, go back to the loop, i.e the next console will never print
  console.log(ageS);
}

//BREAKING
//break completely terminates the whole loop
const ageS = [];
for (let i = 0; i < yeaRs.length; i++) {
  ageS.push(2022 - yeaRs[i]);
  if (ageS[i] === 53) break; //continue means go back to the loop. i.e if ages != ages.lenght, go back to the loop, i.e the next console will never print
}
console.log(ageS);

/*---SECTION 18: LOOPING BACKWARD AND LOOP IN A LOOP--------------*/
//LOOPING BACKWARD

const ogArray = [
  //array example
  "Cynthia",
  "Mamah",
  2022 - 1998,
  "student",
  ["Uche", "Chima", "Jane"],
];

for (
  let i = ogArray.length - 1;
  i >= 0;
  i-- //the initialization can be hard-coded as i = 4;
) {
  console.log(i, ogArray[i]);
}

//LOOP IN A LOOP
for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`----------starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: lefting weights repetition ${rep}`);
  }
}

/*---SECTION 19: WHILE LOOP-----------------*/
//while loop is useful when we dont know how many iterations the loop will start. It does not depend on any counter variable

//EXAMPLE 1
let rep = 1; //initialization
while (rep <= 5) {
  //condition  . this condition doesn't have to be related to any counter at all
  console.log(`While: lefting weights repetition ${rep}`); //loop statement
  rep++; //increment
}

//EXAMPLE 2
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log("not a 6");
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("loop is about to end");
}
//while loop is useful when we dont know how many iterations the loop will start. It does not depend on any counter variable
