
/*---VALUE AND VARIABLE ASSIGNMENT------*/
let country = "Nigeria";
let continent = "Africa";
let population = 240000000;

console.log(country);
console.log(continent);
console.log(population);



/*---DATA-TYPEs ASSIGNMENT-----*/
const isIsland = false;
//let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
//console.log(typeof language);



/*-----let, const and var assignment---------*/
const language = "English";



/*---- BASIC OPERATORS ASSIGNMENT---------*/
let newPopulation = population / 2;
const finlandPopulation = 6000000;
const averagePopulation = 33000000;
console.log(newPopulation);
//newPopulation++;
newPopulation += 1;
console.log(newPopulation);

console.log(population > finlandPopulation);
console.log(population < averagePopulation);

let description = ('portugal' + ' ' + 'is' + ' ' + 'in' + ' ' + 'Europe');   //used 'let' instead of 'const' hence I will reassign the value of description in line 51
console.log(description);




/*---- STRINGS AND TEMPLATE LITERALS ASSIGNMENT---------*/

//Recreate the 'description' variable from the last assignment, this time using the template literal syntax

console.log(`${description}`); 
            //or
console.log(description = `portugal is in Europe`);
            //or
console.log(description);





/*---- TAKING DECISION: IF/ELSE ASSIGNMENT---------*/

const average = 33000000;
if(population > average)
{
    console.log(`${country}'s population is above average`);
}

else
{
    console.log(`${country}'s population is ${(average - population)} below  average population ${average}`);
}



/*---- TYPE CONVERSION AND TYPE COERCION ASSIGNMENT---------*/

console.log('9' - '5');               //4
console.log('19' - '13' + '17');      //617
console.log('19' - '13' + 17);        //23
console.log('123' < 57);              //false
console.log(5 + 6 + '4' + 9 - 4 -2);   //1143




/*---- EQUALITY OPERATOR: == vs === ASSIGNMENT ---------

let numNeighbourss = prompt("How many neighbour countries does your country have? ");
if(numNeighbourss == 1)
    console.log('Only 1 border!');
else if(numNeighbourss > 1)
    console.log('More than 1 border');
else
{
    console.log('No borders');
}


 let numNeighbours = Number(prompt("How many neighbour countries does your country have? "));   //you must convert the string to number in order for the strict comparison to a number in line 101 not give error
 
if(numNeighbours === 1)
    console.log('Only 1 border!');
else if(numNeighbours > 1)
    console.log('More than 1 border');
else
{
    console.log('No borders');
}

*/




/*---- LOGICAL OPERATOR ASSIGNMENT ---------*/

if(language === 'English' && !isIsland && population < 50000000)
    console.log(`you should live in ${country}`);
else
{
    console.log(`${country} does not meet your criteria`);
}



/*---- SWITCH STATEMENT ASSIGNMENT ---------*/
const lang = 'chinese'

switch(lang)
{
    case 'mandarine':
    case 'chinese':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
}



/*---- TERNARY OPERATOR ASSIGNMENT ---------*/

const popu = population > 33000000 ? `${country} population is above average` : `${country} population is below average`;
console.log(popu);
