
function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            console.log("Not a prime number");
        }
        else
        {
            console.log("this is a prime number");
        }
    }
}

isPrime(10);