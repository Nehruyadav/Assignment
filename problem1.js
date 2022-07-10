  
        function Factorial(n) {
            //check the condition
            if (n === 0) {
                return 1;
            }
            //condtion is fails it enters to else block and execute the statements
            else {
                return n * Factorial( n - 1 );
            }
        }
        console.log(Factorial(5));


        //input is 5
        //output is 120