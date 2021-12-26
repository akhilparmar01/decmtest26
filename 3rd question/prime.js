//Write a program to take input from user and check whether that is prime or not
 


  const number = parseInt(prompt("Enter a positive number: "));
  let isPrime = true;

  if (number === 1) {
  console.log("1 is neither prime nor composite number.");
 }

  else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
    }

   else {
    console.log("The number is not a prime number.");
 }