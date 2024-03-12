// check whether the given charcter is vowel or not
let alplabets = prompt('Enter alplabets a to z:');
if(alplabets=='a'|| alplabets=='e' || alplabets=='i' || alplabets=='o' || alplabets=='u')
{
    console.log(`${alplabets} is a vovel`);
}else if(alplabets=='A'|| alplabets=='E' || alplabets=='I' || alplabets=='O' || alplabets=='U') {
    console.log(`${alplabets} is a vovel`)
}else
{
    console.log(`${alplabets} is not a vovel`)
}

//check type pf triange
let side1= Number(prompt('Enter the triangle side1 number'));
let side2= Number(prompt('Enter the triangle side2 number'));
let side3= Number(prompt('Enter the triangle side3 number'));
if((side1+side2<=side3) || (side1+side3<=side2) || (side2+side3<=side1))
{
    console.log('It is not a triangle');
}else if(side1===side2 && side2===side3)
{
    console.log('It is an equilateral triangle');
}else if((side1===side2 && side1!==side3) || 
         (side2===side3 && side2!==side1) || 
         (side3===side1 && side1!==side2))
{
    console.log('it is an Isosceles Triangle');
}else if(side1!==side2 && side1!==side3)
{
    console.log('Scalene Triangle');
}else {
    console.log("Enter valid values");
}

//Checking weather based on temparature
let temp= Number(prompt("Enter the temprature"))
if(temp>=30){
    console.log("hot weather")
}else if(temp>=18 && temp<=29){
    console.log("neutral weather")
}else{
    console.log("cold weather")
}

//leap year ot not
const year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  console.log(year + " is a leap year.");
} else {
  console.log(year + " is not a leap year.");
}
//check whether it's a weekday or a weekend day using a if-else statement.
let day='Wednesday';
  if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
      console.log("Weekday");
  } else if (day === "Saturday" || day === "Sunday") {
    console.log("Weekend");
  } 
//prime or not
let num = Number(prompt('Enter any number to check prime or not:'));
    let count = 0;
    for(let i=1; i<=num; i++)
    {
      if(num%i==0)
      {
          count++;
      }
    }
    if(count==2)
    {
      console.log(num+ " is a prime number");
    }else
    {
        console.log(num+ " is not a prime number");
    }
//even or add
let a =9;
if(a%2===0)
{
    console.log(`${a} is an even number`);
}else
{
    console.log(`${a} is an odd number`);
}


