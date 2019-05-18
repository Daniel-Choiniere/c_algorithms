// Sum all the prime numbers up to and including the provided number.
// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number
// because it's only divisible by one and two.

function isPrime(value) {
    var counter = 0;
    for(var i = 2; i < value; i++)
    {
        if(value % i === 0)
        {
            counter += i;
            // console.log("Not a prime number");
            // return value;
        }
        else if (value % i !== 0 || value === 2)
        {
            console.log("This is a prime number");
            // return value;
        }
        console.log(counter);
    }
}

isPrime(10);