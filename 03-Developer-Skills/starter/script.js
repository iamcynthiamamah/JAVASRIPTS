// Remember, we're gonna use strict mode in all scripts now!

//remember we created a snippet 'cl' for console.log
'use strict';

            const x = '23';
            if (x === 23) {
            console.log(34);
            console.log(40);
            }
            console.log(40);
            console.log(50);
            console.log(60);
            console.log('ada');

/*---PROBLEM 1------------*/
        //Using Google, StackOverflow and MDN
        // We work for a company building a smart
        //home thermometer. Our most recent task is this:
        //"Given an array of temperatures of one day,
        //calculate the temperature amplitude. Keep in mind
        //that sometimes there might be a sensor error."
        //const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

            const calcAmplitude = function (temperature) {
            let max = temperature[0];
            let min = temperature[0];
            for (let i = 0; i < temperature.length; i++)
            {
                if (typeof temperature[i] !== 'number') continue     //incase of sensor error, when number is not gotten, the statements below will not execute and we will move to considering the next element
                if (temperature[i] > max) 
                    max = temperature[i];
                if(temperature[i] < min)
                    min = temperature[i];
            }
            console.log(max, min);
            return (max - (min));
            };

            const ans = calcAmplitude([3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]);
            console.log(ans);



/*---PROBLEM 2------------*/
        // PROBLEM 2:
        // Function should now receive 2 arrays of temps

            const calcAmplitudes = function (temp1, temp2) {
                let temperature = temp1.concat(temp2);        //concatenates the 2 arrays into 1. i.e joins the 2 arrays, temp1 and temp2
                console.log(temperature);

                let max = temperature[0];
                let min = temperature[0];
                for (let i = 0; i < temperature.length; i++)
                {
                    if (typeof temperature[i] !== 'number') continue     //incase of sensor error, when number is not gotten, the statements below will not execute and we will move to considering the next element
                    if (temperature[i] > max) 
                        max = temperature[i];
                    if(temperature[i] < min)
                        min = temperature[i];
                }
                console.log(max, min);
                return (max - (min));
                };

                const answer = calcAmplitudes([ 3, -2, -6, -1], [9, 13, 17, 15, 14, 9, 5]);
                console.log(answer);
