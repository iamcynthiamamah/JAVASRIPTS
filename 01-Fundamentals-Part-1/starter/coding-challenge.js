/*-------CODING CHALLENGE 1----------*/

// Mark and John are trying to compare their BMI(Body Mass Index), which is calculated using the formula;
// BMI = mass / height ** 2 = mass/(height * height). 
// (mass in kg and height in meter). 

// 1. Store Mark's and John's mass and height in variables 
// 2. calculate both their BMIs using the formula (you can even implement both versions)
// 3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John. 


// TEST DATA 1: Marks weights 78kg and is 1.69m tall. 
// John Weights 92 kg and is 1.95m tall. 

// TEST DATA 2: Marks weights 95kg and is 1.88m tall. 
// John weighs 85kg and is 1.76m tall


    //USING TEST DATA 1
        let marksWeight = 78;
        let marksHeight = 1.69;                                 

        let johnsWeight = 92;
        let johnsHeight = 1.95;                                 //line 20 - 24 are INITIALIZATION of variables answering question 1

        let marksBMI;                                           //variable declaration
        let johnsBMI;
        let marksHigherBMI;                                     //variable declaration
        marksBMI = marksWeight / (marksHeight ** 2);            //BMI calculation answering question 2
        console.log(marksBMI);
        johnsBMI = johnsWeight / (johnsHeight * johnsHeight);   //BMI calculation answering question 2
        console.log(johnsBMI);

        marksHigherBMI = (marksBMI > johnsBMI);                 //a boolean variable answering question 3
        console.log(marksHigherBMI);



    //USING TEST DATA 2
        marksWeight = 95;                                     //reassigning the value of a variable that was already declared in line 20
        marksHeight = 1.88;                                   //reassigning value of a variable

        johnsWeight = 85;                                     //reassigning a variable
        johnsHeight = 1.76;                                   //lines  40 - 44 is reassigning the value of the variables to answer question 1 using TEST DATA 2 

        marksBMI = marksWeight / (marksHeight ** 2);          //BMI calculation answering question 2 using TEST DATA 2  
        console.log(marksBMI);                                
        johnsBMI = johnsWeight / (johnsHeight * johnsHeight); //BMI calculation answering question 2 using TEST DATA 2
        console.log(johnsBMI);

        marksHigherBMI = (marksBMI > johnsBMI);               //a boolean variable answering question 3
        console.log(marksHigherBMI);





/*-------CODING CHALLENGE 2----------
    Use the BMI example from Challenge #1, 
    and the code you already wrote, and improve it.
    
    Your tasks:
    1. Print a nice output to the console, saying who has the higherBMI. 
       The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
   
    2. Use a template literal to include the BMI values in the outputs. 
       Example:"Mark's BMI (28.3) is higher than John's (23.9)!"
    
       Hint: Use an if/else statement 😉
        */

       if(marksBMI > johnsBMI)
       {
            console.log(`Mark's BMI ${marksBMI} is higher than John's ${johnsBMI} !`);
       }
       else
       {
            console.log(`John's BMI ${johnsBMI} is higher than Mark's ${marksBMI}!`);
       }




/*-------CODING CHALLENGE 3----------
       There are two gymnastics teams, Dolphins and Koalas. 
       They compete against each other 3 times. The winner with the highest average score wins a trophy!
    
       Your tasks:
        1. Calculate the average score for each team, using the test data below

        2. Compare the team's average scores to determine the winner of the competition,
            and print it to the console. Don't forget that there can be a draw, so test for that
            as well (draw means they have the same average score)

        3. Bonus1:Include a requirement for a minimum score of 100. With this rule,a
            team only wins if it has a higher score than the other team, 
            and the same time a score of at least 100 points. Hint: Use a logical operator to 
            test for minimum score, as well as multiple else-if blocks 😉
        
        4. Bonus2:Minimum score also applies to a draw! So a draw only happens when both teams have 
            the same score and both have a score greater or equal 100 points. 
            Otherwise, no team wins the trophy
    
    Test data:
        Test Data 1:  Dolphins score 96, 108 and 89.
                      Koalas score 88, 91 and 110
        Data Bonus 1: Dolphins score 97, 112 and 101.
                      Koalas score 109, 95 and 123 
        Data Bonus 2: Dolphins score 97, 112 and 101.
                      Koalas score 109, 95 and 106
    */

        const dolphinsAverage1 = (96 + 108 + 89) / 3;
        const koalasAverage1 = (88 + 91 + 110) / 3;

        const dolphinsAverage2 = (97 + 112 + 101) / 3;
        const koalasAverage2 = (109 + 95 + 123) / 3;

        const dolphinsAverage3 = (97 + 112 + 101) / 3;
        const koalasAverage3 = (109 + 95 + 106) / 3;

        if(dolphinsAverage1 > koalasAverage1 && dolphinsAverage1 >= 100)
            console.log(`Dolphins won the game for Test-data1`);
        else if(dolphinsAverage1 === koalasAverage1 && dolphinsAverage1 >= 100)
            console.log(`For Test-Data1, there is a draw`);
        else if(dolphinsAverage1 === koalasAverage1 && dolphinsAverage1 < 100)
            console.log(`the minimum score was not met, hence no winner for Test-data1`);
        else if(koalasAverage1 > dolphinsAverage1 && koalasAverage1 >= 100)
            console.log(`Koala's ${koalasAverage1} is the winner to Dolphin ${dolphinsAverage1} using Test-data1`);
        else
        {
            console.log(`There is no winner. dolphins(${dolphinsAverage1}) and koalas(${koalasAverage1})`);
        }



        if(dolphinsAverage2 > koalasAverage2 && dolphinsAverage2 >= 100)
            console.log(`Dolphins won the game for Test-data1`);
        else if(dolphinsAverage2 === koalasAverage2 && dolphinsAverage2 >= 100)
            console.log(`For Test-Data1, there is a draw`);
        else if(dolphinsAverage2 === koalasAverage2 && dolphinsAverage2 < 100)
            console.log(`the minimum score was not met, hence no winner for Test-data1`);
        else if(koalasAverage2 > dolphinsAverage2 && koalasAverage2 >= 100)
            console.log(`Koala's ${koalasAverage2} is the winner to Dolphin ${dolphinsAverage2} using Test-data2`);
        else
        {
            console.log(`There is no winner. dolphins(${dolphinsAverage2}) and koalas(${koalasAverage2})`);
        }



        if(dolphinsAverage3 > koalasAverage3 && dolphinsAverage3 >= 100)
            console.log(`Dolphins won the game for Test-data1`);
        else if(dolphinsAverage3  === koalasAverage3 && dolphinsAverage3 >= 100)
            console.log(`For Test-Data3, there is a draw. Both wins the Trophy. dolphins(${dolphinsAverage3}) and koalas(${koalasAverage3})`);
        else if(dolphinsAverage3 === koalasAverage3 && dolphinsAverage3 < 100)
            console.log(`the minimum score was not met, hence no winner for Test-data1`);
        else if(koalasAverage3 > dolphinsAverage3 && koalasAverage3 >= 100)
            console.log(`Koala's ${koalasAverage3} is the winner to Dolphin ${dolphinsAverage3} using Test-data3`);
        else
        {
            console.log(`There is no winner`);
        }









/*-------CODING CHALLENGE 4----------

        Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant.
        In his country, it's usual to tip 15% if the bill value is between 50 and 300.
        If the value is different, the tip is 20%.

        Your tasks:
        1.  Calculate the tip, depending on the bill value. Create a variable called 'tip' for this.
            It's not allowed to use an if/else statement 😅 
            (If it's easier for you, you can start with an if/else statement,
             and then try to convert it to a ternary operator!)
        
        2.  Print a string to the console containing the bill value, the tip, and the final value (bill + tip).
            Example: “The bill was 275, the tip was 41.25, and the total value 316.25”
        
        Test data:
             Data 1: Test for bill values 275, 40 and 430 
             
             Hints:
             To calculate 20% of a value, simply multiply it by 20/100 = 0.2
             Value X is between 50 and 300, if it's>= 50 && <= 300😉
*/
        
        //let billValue = prompt("whats the bill value? ");
        let billValue = 300;
        console.log(billValue);
        let tip =  (` ${billValue >= 50 && billValue <= 300 ? (0.15 * billValue) : (0.2 * billValue)}`);
        console.log(`The bill was ${billValue}, the tip was ${tip} and the total value is ${Number(billValue) + Number(tip)}`);

        //OR

        tip =  billValue >= 50 && billValue <= 300 ? (0.15 * billValue) : (0.2 * billValue);
        console.log(tip);
        console.log(`The bill was ${billValue}, the tip was ${tip} and the total value ${Number(billValue) + Number(tip)}`);
