'use strict';

 /*-CODING CHALLENGE 1-----------------*/

            // Back to the two gymnastics teams, the Dolphins and the Koalas! 
            // There is a new gymnastics discipline, which works differently.
            // Each team competes 3 times, and then the average of the 3 scores is 
            // calculated (so one average score per team).
            // A team only wins if it has at least double the average score of the other team. 
            // Otherwise, no team wins!

            // YOUR TASKS:
            // 1. Create an arrow function 'calcAverage' to calculate the average of 3scores

            // 2. Use the function to calculate the average for both teams

            // 3. Create a function 'checkWinner' that takes the average score of each team
            //    as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
            //    to the console, together with the victory points, according to the rule above. 
            //    Example: "Koalas win (30 vs. 13)"

            // 4. Use the 'checkWinner' function to determine the winner for both Data1 and Data2

            // 5. Ignore draws this time
            

            //     TEST DATA:
            // Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49 
            // Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27


            //     HINTS:
            // To calculate average of 3 values, add them all together and divide by 3
            // To check if number A is at least double number B, check for A >= 2 * B.
            // Apply this to the team's average scores 😉

        //TASK1 SOLUTION
            const calcAverage = (score1, score2, score3) =>
            {
                return ((score1 + score2 + score3)/3)
            } 
        //TASK2 SOLUTION
            const avgDolphine = calcAverage(44, 23, 71);
            const avgKoalas = calcAverage(65, 54, 49);

        //TASK3 SOLUTION
            const checkwinner = function(avgDolphine, avgKoalas)
            {
                
                if(avgKoalas > avgDolphine && avgKoalas >= (2 * avgDolphine)) 
                    console.log(`Koalas win ${avgKoalas} vs ${avgDolphine}`)
                else if(avgKoalas > avgDolphine && avgKoalas < (2 * avgDolphine))
                    console.log(`no one wins (${avgKoalas} vs ${avgDolphine}) koalas average is not up to 2x dolphine average`)
                else if(avgDolphine > avgKoalas && avgDolphine >= (2 * avgKoalas))
                    console.log(`Dolphins win (${avgDolphine} vs ${avgKoalas})`) 
                else 
                    console.log(`no one wins ${avgDolphine} vs ${avgKoalas} dolphins average is not up to 2x Koalas'`) 
            }

            checkwinner(avgDolphine, avgKoalas);

        //TASK4 SOLUTION USING DATA 2
  
            const avgDolphine2 = calcAverage(85, 54, 41);
            const avgKoalas2 = calcAverage(23, 34, 27);
            checkwinner(avgDolphine2, avgKoalas2);
        
        //TASK5
            //there is no draw so its ignored








/*-----CODING CHALLENGE 2--------------------------*/
            // Steven is still building his tip calculator, using the same rules as before: 
            // Tip 15% of the bill if the bill value is between 50 and 300,
            // and if the value is different, the tip is 20%.

            // YOUR TASK:
            // 1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip,
            //    calculated based on the rules above
            //    (you can check out the code from first tip calculator challenge if you need to).
            //     Use the function type you like the most. Test the function using a bill value of 100
           
            // 2. And now let's use arrays! So create an array 'bills' containing the test data below;

            // 3. Create an array 'tips' containing the tip value for each bill, 
            //    calculated from the function you created before

            // BONUS:
            // 4. Create an array 'total' containing the total values, 
            //     so the bill + tip 
            
            //TEST DATA:
                // 125, 555 and 44
            
            // HINT:
            //     Remember that an array needs a value in each position, and that 
            //     value can actually be the returned value of a function! 
            //     So you can just call a function as array values 
            //     (so don't store the tip values in separate variables first, but right in the new array) 😉


        //TASK 1 ANSWER
            const calcTip = function(billValue)
            {
                const tip = billValue >= 50 && billValue <= 300? (0.15 * billValue) : (0.2 * billValue)
                console.log(tip);
                return tip;
                //`The bill was ${billValue}, the tip was ${tip} and the total value ${Number(billValue) + Number(tip)}`);
            }

                const tipss = calcTip(100);


         //TASK 2 ANSWER
                let bills = [25, 555, 44];
                console.log(bills);
                
        //TASK 3 ANSWER
                const tips = [calcTip(bills[0]), calcTip(255), calcTip(bills[2])]  //this is possible because array elements are expressions(anything that gives a value), and a called function is an expression
                console.log(tips);

        //TASK 4 ANSWER
                const total = [(calcTip(bills[0]) + bills[0]), (calcTip(255) + bills[1]), (tips[2]) + bills[2]]
                console.log(total);






/*---CODING CHALLENGE 4---------------*/
            // Let's improve Steven's tip calculator even more, 
            // this time using loops!
            
            // YOUR TASKS:
            // 1. Create an array 'bills' containing all 10 test bill values
            
            // 2. Create empty arrays for the tips and the totals
            //    ('tips' and 'totals')
            
            // 3. Use the 'calcTip' function we wrote before 
            //    (no need to repeat) to calculate tips and 
            //    total values (bill + tip) for every bill value 
            //    in the bills array. 
            //    Use a for loop to perform the 10 calculations!
            
            // TEST DATA: 
            //     22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
            
            // HINTS: 
            //     Call ‘calcTip ‘in the loop and use the push method to 
            //     add values to the tips and totals arrays 😉 
            
            // Bonus:
            // 4.   Write a function 'calcAverage' which takes an array 
            //      called 'arr' as an argument. This function calculates 
            //      the average of all numbers in the given array. 
            //      This is a difficult challenge (we haven't done this before)! 
            //      Here is how to solve it:

            // 4.1. First, you will need to add up all values in the array. 
            //      To do the addition, start by creating a variable 'sum' 
            //      that starts at 0. Then loop over the array using a for loop. 
            //      In each iteration, add the current value to the 'sum' variable. 
            //      This way, by the end of the loop, you have all values added together

            // 4.2. To calculate the average, divide the sum you calculated before 
            //      by the length of the array (because that's the number of elements)
            
            // 4.3. Call the function with the 'totals' array

         //TASK 1 ANSWER
                const billss = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
                
        //TASK 2 ANSWER
                const tipps = [];
                const ttotals = [];

        //TASK 3 ANSWER
                for(let i = 0; i < 10; i++)
                {
                    tipps[i] = calcTip(billss[i]);
                    ttotals[i] = billss[i] + tipps[i]; 
                }
                console.log(tipps)               //fills the tipps empty array with the tip value i.e the tipps[]
                console.log(ttotals)

        //BONUS 4 ANSWER
                const arr = [];                       //declaring an empty array
                let sum = 0;
                const calCAverage = function(arr)        //function that takes an array 'arr' as arguement
                {
                    for(let i = 0; i <= arr.length-1; i++)       //looping through the array to calculate sum
                    {
                        sum += arr[i];
                    }
                //NOTE: arr.length-1 will give the index number of the last element, since the first e]ement starts with 0, i.e arr[0];
                    return (sum/arr.length)                     //returning the average of the elements of the array
                                                       //arr.length will give the total number of elements in the array
                }

                let abc = [2, 2, 4, 4];                       //declaring an array to call the function with since the function takes an array as arguement
                const avg = calCAverage(abc);    //calling the calCAverage function using an array, abc as argument
                console.log(avg);
                






/*---CODING CHALLENGE 3--------------*/
            // Let's go back to Mark and John comparing their BMIs! This time,
            // let's use objects to implement the calculations! Remember:
            // BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)
            
            // YOUR TASKS:
            // 1. For each of them, create an object with properties for their fullname, mass,
            //    and height (Mark Miller and John Smith)

            // 2. Create a 'calcBMI' method on each object to calculate 
            //    the BMI(the same method on both objects).
            //    Store the BMI value to a property, and also return it from the method

            // 3. Log to the console who has the higher BMI, together with the fullname
            //    and the respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

            // TEST DATA: 
            //     Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.



        //TASK 1 ANSWER
            const mark = {
                fullName: 'Mark Miller',
                mass: 78,
                height: 1.69,
                calcBMI: function()           //TASK 2 ANSWER: creating a method
                {
                   this.BMI = this.mass/(this.height ** 2);
                   return this.BMI;
                }
            };

            const john = {
                fullName: 'John Smith',
                mass: 92,
                height: 1.95,
                calcBMI: function()         //TASK 2 ANSWER: creating a method
                {
                    this.BMI = this.mass/(this.height * this.height);
                    return this.BMI;
                }
            };
        //TASK 2 ANSWER
            mark.calcBMI() > john.calcBMI() ? console.log(`Mark's BMI (${mark.calcBMI()}) is higher than John's(${john.calcBMI()})`) : console.log(`John's BMI (${john.calcBMI()}) is higher than Mark's(${mark.calcBMI()})`) 