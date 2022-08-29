
/*  FUNDAMENTAL PART-1 SECTION 1-6

            let js = "amazing";
        //   if(js === "amazing") alert("javascript is fun");
        console.log(40 + 8 + 23 -10);
        //value is the smallest unit of information that we have in javascript
        //variable is a box within which we can store a value. Variables can be referenced over and over again
        console.log("Jonas");
        console.log(23);


    //VARIABLE DECLARATION 
        let firstName = "Cynthia";
        let myLastName = "Mamah";
        let mySchoolName = "FUPRE";


    //PRINTING TO THE CONSOLE
        console.log(firstName);
        console.log(myLastName);
        console.log(mySchoolName);
        console.log(firstName);       //referencing the variable firstName
        
        //above, firstName is a variable and Jonas is a value
        //DO NOT start a variable name with an uppercase letter EXCEPT for constants that can never change, E.G PI

      */






/*---SECTION 7: DETERMINING THE TYPE OF DATA-TYPE USING THE typeof OPERATOR....
      
        let javaScriptIsFun = true;        //true is a boolean data-type
        console.log(javaScriptIsFun);
        console.log(typeof 23);   
        console.log(typeof 'jonas');   //we can use double or single quote to create a string. A string must precede and procede a string. without a quote, it becomes a variable      
        console.log(typeof "jonas");
        console.log(typeof true);     //typeof operator is used to determine the data-type


    //DYNAMIC TYPING
        javaScriptIsFun = 'YES';    //'let' didn't precede javaScriptIsFun  this time hence the variable javaScriptIsFun had already been declared
        console.log(typeof javaScriptIsFun);     //this variable will act as a string here and not as a boolean anymore cos it has been reassigned as string



    //DECLARING A VARIABLE WITHOUT A VALUE
        let year;                //undefined
        console.log(year);
        console.log(typeof year);

        year = 1991;        //year has been reassigned from it's initial undefined state to a number data-type
        console.log(typeof year);

        console.log(typeof null);        //this will show 'object' which is not a data-type hence it's a bug
        */





/*-SECTION 8:LET, CONST AND VAR------------

    //LET
        //a variable declared with 'let' can be mutated or reassigned as shown below

        let age = 30;
        age = 31;

        let year;
        year = 1999;

    //CONST
        //const is used to declare a variable that cannot be changed throughout the program as shown below
        const birthYear = 1999;   //the value of this value cannot be changed throughout the program
        //moreso, we cannot declare an empty const variable. e.g const birthYear; will give an error
        
        //var is the old way of declaring variable prior to ES6
        var job = 'programmer';
        job = 'teacher';
        //AVOID var, NEVER use 'var'.

    //NOTE: always use 'const' by default except in a situation where you are certain that the value of the variable will change later on in the program 
    */




/*-SECTION 9: OPERATORS------------

        const year = 2037;
        const ageCy = year - 1991;
        const ageOge = year - 2018;

        console.log(ageCy, ageOge);
        console.log(ageCy * 2, ageOge / 2, 2 ** 3);    
        //2 ** 3 means 2 to the power of 3 = (2 * 2 * 2)


    //CONCATENATION OF STRINGS
        const firstName = 'Cynthia';
        const lastName = 'Mamah';
        console.log(firstName + ' ' + lastName); //cocatenation of strings. which simoly means addition of strings to form one string


    //Typeof operator
        const first = 'Ogechi';
        console.log(typeof first);


    //ASSIGNMENT OPERATORS
        let x = 10 + 5;    // == is an assignment operator, so here x will be assigned 15
        console.log(x);
        x += 10;         //means x = x + 10 ...... x at this point will be 25
        console.log(x);
        x *= 4;           //means x = x * 4
        console.log(x);
        x--;               //means x -1
        console.log(x);
        x++;               //means x + 1
        console.log(x);

    //COMPARISON OPERATOR
        console.log(ageCy < ageOge);    //will print  true if ageCy is less than ageOge or false if otherwise
        console.log(ageCy > ageOge);
        console.log(ageCy >= 50);
        console.log(ageOge >= 18);

        console.log(year - 1999 > year - 2018);   //not, it will pooerform the math operator first before the comparison operator

     //NOTE: IN REAL APPLICATIONS, THESE RESULTS WILL BE SAVED TO A VARIABLE NOT NECESSARILLY LOGGED TO THE CONSOLE

    */





/*-SECTION 10: OPERATOR PRECEDENCE------------

        //googling 'mdn operator precedence' will give us the precedence table for the operators

        let a, b;
        a = b = 25 - 10 - 5;
        console.log(a, b);     //this will give (10, 10) hence the math operator will be performed before the assignment operator based on the operator precedence
        
        //grouping( ) has the highest operator precedence
        const averageAge = (ageCy + ageOge) / 2;
        console.log(averageAge);
*/



/*---SECTION 12: STRINGS AND TEMPLATE LITERALS----------

        const nameFirst = 'Cynthia';
        const nameLast = 'Mamah';
        const yearBirth = 1991;
        const yearNow = 2037;
        const jobNow = 'student';

        const cynthia = "I'm " + nameFirst + ', a ' + (yearNow - yearBirth) + ' years old ' + jobNow + '!';
        console.log(cynthia);

        //rather than this conventional way, starting from ES6 we have what we call TEMPLATE LITERALS that makes the work lot easier


                        //USING TEMPLATE LITERALS
        
   
                        //TEMPLATE LITERALS WITH VARIABLES
        const cy = `I'm ${nameFirst} ${nameLast} a ${yearNow - yearBirth} years old ${jobNow}`;
        console.log(cy);
        // In using a template literal strings a concatenated by writting them within ` ` back ticks, whereas variables a placed within this placeholder ${}
                    
    
    //TEMPLATE LITERALS WITHOUT A VRAIABLE in a placeholder
        const oge = `I am Cynthia Mamah, a 46 year old student in Nigeria`;
        console.log(oge);


    //TEMPLATE LITERALS WITH MULTI-LINE STRING
        console.log(`        I am Cynthia Mamah
        a student of the prestigious
        Federal University Of Petroleum Resources
        Effurum`);
        
    */





/*---SECTION 13: TAKING DECISIONS----------*/
        const birthYear = 2015;
        let century;

        if(birthYear >= 2000)
        {
            console.log(century = 21);   
        }

        else
        {
            console.log(century = 20);
        }


        const myYear = 2012;
        const yearNow = 2022;
        const drivingAge = yearNow - myYear;

        if(drivingAge >= 18)
        {
            console.log(`hurray! you are qualified to hit the road `);
        }

        else
        {
            console.log(`Go home! \n\you have ${18 - drivingAge}years more to hit the road`);   // \n\ stands for new line
        }





/*---SECTION 15: TYPE CONVERSION/COERCION----------*/
        //type conversion is when we manually convert from one type to another
        //type coercion is when javascript automatically convert types behind the scene for us


        //TYPE CONVERSION
        //CONVERTING STRING TO NUMBER
            const inputYear = "1998";
            console.log(inputYear);          //this will print 1998 as a string
            console.log(Number(inputYear));   //this will print 1998 as a number

            console.log(inputYear + 18);     //this will cocatenate the string and input 199818
            console.log(Number(inputYear) + 18);    //this will perform the mathematical operation and print 2016    


        //CONVERTING NUMBER TO STRING
            console.log(String(23))         //will print 23 as a string

            //NOTE: In type conversion the 'S' of string ans 'N' of number must always be in uppercase

        
        //TYPE COERCION
            //javascript will authomatically convert strings in calculations to numbers except when using the addidtion '+' which cocatenates instead
            console.log('23' - '10' - 3);    //will convert the strings to numbers and print 10 as answer
            console.log('50'/2);             //will convert string to number and give an answer of 25
            console.log('23' > '18');        //will convert the strings to number and give 'TRUE' as ans
            //type coercion does not happen with the addition sigh '+'
            console.log('23' + '10' + 3)     //will concatenate the strings and print as an answer '23103'





/*---SECTION 16: TRUTHY AND FALSY VALUES----------*/
            //falsy values are values that are not exactly false but will become false when we try to convert them to a boolean
            //5 falsy values: 0, '', undefined, null, NaN

            console.log(Boolean(0));      //will give false
            console.log(Boolean(NaN));     //false
            console.log(Boolean('jonas'));   //true
            console.log(Boolean(''));      //false


            //EXAMPLE 1:
            const money = 0;         //this is right hence, 0 is a falsy value
            if(money)             //money will be converted to a boolean and since 0 is a falsy value, the program will run as print the result for no money
            {
                console.log("Don't spend it all");
            }
            else
            {
                console.log(`you should get a job`);
            }

            //EXAMPLE 2:
            let height;
            if(height)
            {
                console.log(`YAY! height is defined`);
            }
            else
            {
                console.log("Height is undefined");
            }







/*---SECTION 17: EQUALITY OPERATORS ----------*/

            // = : asssignment operator
            // == : loose equality operator. it performs TYPE-COERCION
            // === : strict equality operator. It does not perform TYPE-COERCION
            
            const age = 18;        // '=' is an assignment operator

            if(age === 18)         // '==='  strict equality operator. i.e the comparison operator
                console.log("you just became an adult");

            if(age == 18)  //this will still run if you asisgn age == '18' . i.e 18string because it is a loose equality
                console.log("you are an adult");



        //PROMPT
            // let favourite = prompt("what's your favourite number?");
            // console.log(favourite);      //will prompt for a number
            // console.log(typeof favourite);    //string




            // favourite = Number(prompt("what's your favourite number?"));
            // console.log(favourite);      //will prompt for a number
            // console.log(typeof favourite);    //number will be printed because of the conversion in line 326





    


/*---SECTION 18: BOOLEAN LOGIC ----------*/



/*---SECTION 21: THE SWITCH STATEMENT ----------*/
            const day = 'monday';

            switch(day)
            {
                case 'monday':    //day === monday (it does strict comparison)
                    console.log(`Plan course structure`);
                    console.log('Go to coding meetup');
                    break;
                case 'tuesday':
                    console.log('prepare theory videos');
                    break;
                case 'wednesday':
                case 'thursday':
                    console.log('write code examples');
                    break;
                case 'friday':
                    console.log("record videos");
                case 'saturday':
                case 'sunday':
                    console.log('Enjoy the weekend');
                    break;
                default:
                    console.log('not a valid day');
            }





/*---SECTION 22: STATEMENTS AND EXPRESSIONS ----------*/
            //expression is a piece of code that produces a value. Example 3 + 4, 1991, true etc
            //statements is a piece of code that does not produce a value. they are like full sentences that translates our actions. 

            //NOTE: STATEMENTS are not used in a template literals, only expression



/*---SECTION 23: THE CONDITIONAL(TERNARY) OPERATOR ----------*/
            //ternary operator has 3 parts:
            // 1.condition
            // 2.if and 
            // 3.else
                const ages = 13;

                ages >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');
                //or
                const drink = ages >= 18 ? 'wine' : 'water' ;
                console.log(drink);

                console.log(`I like to drink ${ages >= 18 ? 'wine' : 'water'}`);

            //NOTE: STATEMENTS are not used in a template literals, only expression
            //ternary operators produces a value, hence can be referred to as an expression and not a statement, thus can be used in a template literal as shown above