// 1. Create a function that will be able to convert figures from Fahrenheit to Celsius

function fahrenheitToCelsius (fahrenheit) {

  let celsius = 5/9 * (fahrenheit - 32);
  console.log (celsius);
}

fahrenheitToCelsius(95);

// fahrenheitToCelsius(35)


// 2.  Create a function that will calculate the average of numbers in an array.

function averageOfNumbers (mean) {
  let myArray = [10, 20, 30, 50, 100];


  let sum = myArray.reduce((accumulator, currentValue)=> {
    return accumulator + currentValue;
  });
  const averageOfSum = sum / mean ;

 console.log(averageOfSum);
}

averageOfNumbers(5);

// averageOfNumbers(42)


// 3.  Create a function that checks if a number, n is divisible by two numbers x and y. All inputs are positive, non-zero digits.

function numberCheck (valueNumber, numberX, numberY) {
  // const numberX = 5;
  // const numberY = 10;
  if (valueNumber % numberX === 0 && valueNumber % numberY === 0) {
    console.log('Divisible');
  } else {
   console.log ('Not divisible');
  }
}
numberCheck(1000, 5, 10);

// numberCheck(Divisible)


// 4. Create a function that will output the first 100 prime numbers.

function primeNumbers (thisIsPrime){
  console.log("Prime numbers from 1 to 100 are: ");
  // let thisIsPrime = true;
  for(let i=2; i <= 100; i++){
    for(let j=2; j < i - 1; j++){
      if(i % j == 0){
        thisIsPrime = false;
        break;
      }
    }
    if(thisIsPrime){
      console.log(i);
    }
    thisIsPrime = true;
  }
}
primeNumbers(true);




// 5. Create a function that will return a boolean specifying if a number is a prime number.

function itsPrime (number) {

let isPrime = true;

// check if number is equal to 1
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(true);
    } else {
      console.log(false);
    }
}

// check if number is less than 1
else {
    console.log(false);
}
return number;
}
itsPrime(29);





// 6. Create a function that receives an array of numbers of diverse numbers and returns an array containing only positive numbers.


function filterArrays(arr) {
 let positiveArrays = arr.filter(num => num > -1);
 
 console.log(positiveArrays);
 return positiveArrays;
}
filterArrays([-2, 0, 9, 99, 1, -7, -6, -1, 10]);


// 7. Write a program that prints the numbers from 1 to 100. But for multiples of 3 prints "Fizz" instead of the number and for the multiples of 5 prints "Buzz". For numbers which are multiples of both 3 and 5 prints "FizzBuzz"


function fizzBuzz(){
  for (let num = 1; num <= 100; num++) {
  
    if (num % 3 === 0 && num % 5 == 0){
      console.log('FizzBuzz');
    }else if (num % 5 === 0) {
      console.log('Buzz')
    }else if (num % 3 === 0 ) {
      console.log('Fizz')
    
    } else {
      console.log (num);
    }
   
  }
}

fizzBuzz();






// 8  The marketing team is spending way too much time typing in hashtags. Let’s create a hashtag generator for them, our hashtag generator will meet the following criteria; 
// It must start with a hash symbol, #.
// Ignore all spaces in the input.
// All words must have their first letter capitalized.
// If the final result is going to be longer than 140 characters, it should return false.
// If the input or result is an empty string, it should return false.


function hashTagGenerator(hashIn){ 
  if(hashIn===''){ 
      console.log(false) 
  }else{ 
      array = hashIn.split(" ") 
      array2 = ['#'] 
      for(let i=0; i<array.length; i++){ 
          word = toTitleCase(array[i]) 
          array2.push(word) 
      } 
      new_string=array2.join("") 
      if(new_string.length>140){  // check how to get length of string 
          console.log(false) 
      }else{ 
          console.log(new_string) 
      } 
  } 
} 


function toTitleCase(str) { 
  return str.toLowerCase().replace(/(?:^|\s)\w/g, function(match) { 
    return match.toUpperCase(); 
  }); 
} 

 hashTagGenerator('hundred days of code'); 
  hashTagGenerator('popular hash tAgs On twitteR');