
function findNthTerm(n)
{
    // If input number is even
    if (n % 2 == 0) {
        n = Math.floor(n / 2);
        console.log(Math.pow(3, n - 1) );
    }
    // If input number is odd
    else {
        n = Math.floor(n / 2) + 1;
        console.log(Math.pow(2, n - 1) + "<br>");
    }
}

// Driver Code

let n = 18;
findNthTerm(n);

