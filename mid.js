//task9//



//task 10*//
for (let num = 2; num <= 20; num++) {
    let isPrime = true;  
    for (let i = 2; i <= Math.sqrt(num); i++) { 
        if (num % i === 0) {  
            isPrime = false;
            break;  
        }
    }
    if (isPrime) {
        console.log(num);  
    }
}
//task11//
let number = 5;  
for (let i = 1; i <= 10; i++) {
    console.log()
}
//task12//
for (let i = 1; i <= 5; i += 2) {
  console.log(i);
}
//task13//

for (let i = 5; i >= 1; i--) {
    console.log(i);
}
//task14//

for (let i = 1; i <= 5; i++) {
  if (i > 2 && i > 4) {
    console.log(i);
  }
}
//task15//

let found = false;
for (let i = 1; i <= 5; i++) {
  if (i === 4) {
    found = true; 
    break; 
  }
}

if (found) {
  console.log("true");
} else {
  console.log("false");
}
//task16//


//task17//
const n = 10;

let fibonacci = [0, 1]; 

for (let i = 2; i < n; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
console.log(" Fibonacci ", fibonacci.join(", "));