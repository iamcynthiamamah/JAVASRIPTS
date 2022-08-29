/*--ASSIGNMENT 1: FUNCTION----------*/
// 'use strict';

// function describeCountry(country, population,capitalCity)
// {
//     let desc = `${country} has ${population} people and its capital city is ${capitalCity}`;
//     return desc;
// }

// let country = 'Finland';
// let population = '6 million';
// let capitalCity = 'Helsinki';


// const fun1 = describeCountry(country, population, capitalCity);
// console.log(fun1);
// const fun2 = describeCountry('Nigeria', '200+ million', 'Abuja');
// console.log(fun2);
// const fun3 = describeCountry('Ghana', '120 million', 'Accra');
// console.log(fun3);




/*--------ASSIGNMENT 2: FUNCTION DECLARATION VS EXPRESSION-------*/

//USING FUNCTION DECLARAION
let worldPopulation = 7900000000;
//console.log(typeof(worldPopulation));
console.log(worldPopulation);

function percentageOfWorld1(population)
{
    const result = ((population/worldPopulation)*100);
    return(`${result}%`);
    
}

const percentage1 = percentageOfWorld1(1441000000);
console.log(percentage1);
const percentage2 = percentageOfWorld1(200000000);
console.log(percentage2);
const percentage3 = percentageOfWorld1(2000000000);
console.log(percentage3);

//USING FUNCTION EXPRESSION
const percentageOfWorld2 = function(population)
{
    return((population/worldPopulation)*100);
    
}

const percentage4 = percentageOfWorld2(1441000000);
console.log(percentage4);
const percentage5 = percentageOfWorld2(200000000);
console.log(percentage5);
const percentage6 = percentageOfWorld2(2000000000);
console.log(percentage6);