//write a program that computes the average age of 20 students between 18-50


//FUNCTION THAT COLLECTS USER INPUT
const inputNumber = function () {
    let y = prompt("Enter age of students");
    return Number(y);
}

//FUNCTION THAT CALCULATES AVERAGE
const calcAverage = function (sum, avg) {
    return (sum / avg)
}

//PROGRAM THAT CALCULATES THE AVERAGE AGE OF STUDENTS USING THE INPUT FUNCTION, CALCAVERAGE FUNCTION AND WHILE LOOP
let j = 0, k = 0, sum = 0;
while (j <= 2) {
    let i = inputNumber();           //calling the inputNumber function
    if (i >= 18 && i <= 50) {
        sum = Number(sum) + i;       //i didnt use Number(i) because the it has been set in the function inputNumber, hence it will returns the value of the input in a number form
        k++;                        //k serves as the counter for the number of inputs that will be used to calculate average
    }
    else {
        alert("number must be greater than 17 and less than 51")
        continue                   //continues the loop negleting the following steps which is j++, therefore the loop using the same j value at this stage will re-execute
    }
    j++;
}
console.log(`sum of the ${k} numbers is ${sum}`);

const average = calcAverage(sum, k)    //calling the calcAverage function
console.log(`average of ${k} numbers has a total sum of ${sum} with an average of ${average}`)





//PROGRAM THAT CALCULATES THE AVERAGE AGE OF STUDENTS USING THE INPUT FUNCTION, CALCAVERAGE FUNCTION AND FOR LOOP
// let sum = 0
// let j = 0;                        //j serves as the counter for the number of inputs that will be used to calculate average     

// for (let i = 0; i <= 2; i++) {
//     let x = inputNumber();        //calling the inputNumber() function
//     if (x >= 18 && x <= 50) {
//         sum = Number(sum) + x     //x didnt use Number(x) because the it has been set in the function inputNumber, hence it will returns the value of the input in a number form
//         j++                       //increments the total number of students with the accepted age
//     }
//     else {
//         alert("number must be greater than 17 and less than 51");
//         continue                   //continues the loop negleting the supposed next steps which is i++ from the for loop, therefore the loop using the same i value at this stage will re-execute
//     }

// }
// console.log(`sum of the ${j} numbers is ${sum}`);
// const average = calcAverage(sum, j)           //calling the calcAverage value
// console.log(`average of ${j} numbers has a total sum of ${sum} with an average of ${average}`)

