/*---CODING CHALLENGE---------------*/

//     Given an array of forecasted maximum temperatures, the thermometer displays 
//     a string with the given temperatures. 
//     Example: 
//     [17, 21, 23] will print "... 17oC in 1 days ... 21oC in 2 days ... 23oC in 3 days ..."

// TASKS:
//      1. Create a function 'printForecast' which takes in an array 'arr' and logs a 
//          string like the above to the console. Try it with both test datasets.

//      2. Use the problem-solving framework: Understand the problem and break it up 
//         into sub-problems!

// TEST DATA:
//     Data 1: [17, 21, 23]
//     Data 2:[12, 5, -5, 0, 4]


let arr = [];
const printForecast = function (arr) {
        let string = ''                     //just like sum = 0;
        for (let i = 0; i <= arr.length - 1; i++) {
                string = string + `... ${arr[i]}oC in ${i + 1} days `

        }
        console.log(string)
}

let data1 = [17, 21, 23];
printForecast(data1);             //calling the printForecast function using data1 array
let data2 = [12, 5, -5, 0, 4];
printForecast(data2);               //calling the printForecast function using data2 array




/*---------OR ALTERNATIVE SOLUTION-----------------*/


// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with ºC
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console

const datas1 = [17, 21, 23];
const datas2 = [12, 5, -5, 0, 4];

console.log(`... ${data1[0]}ºC ... ${data1[1]}ºC ... ${data1[2]}ºC ...`);

const printtForecast = function (arr) {
        let str = '';
        for (let i = 0; i < arr.length; i++) {
                str += `${arr[i]}ºC in ${i + 1} days ... `;
        }
        console.log('...' + str);
};
printtForecast(datas1);
printtForecast(datas2);
