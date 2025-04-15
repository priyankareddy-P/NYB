//JavaScript recap practice

let studentInfo = {
    name : "Priyanka",
    age: 23,
    subjects: ["Maths", "Science", "Social"]
};

function getDetails(student)
{
    let subjectList = student.subjects.join(",");
    return "name:" +student.name 
    return "age:"+student.age
    return "subjectList:"+subjectList;
}
console.log(getDetails(studentInfo));

//function conversion
//Write a function to find the factorial of a number

function factorial(num)
{
    let result = 1;
    for (let i = 1; i <= num; i++)
    {
        result *= i;
    }
    return result;
    }
    console.log(factorial(10));

//convert the same into
//function exprssion

const factorial = function(num)
{
    let result = 1;
    for (let i = 1; i <= num; i++)
    {
        result = result * i;
    }
    return result;
}
let number = 8;
console.log(Factorial(8));

//Arrow function

const factorial = (num) =>
{
    let result = 1;
    for (let i = 1; i <= num; i++)
    {
        result *= i;
    }
    return result;
}
letnumber = 8;
console.log(Factorial(8));

//prime number checker
//write a function is prime number

function prime(num)
{
    if(num <= 1)
    {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++)
    {
        if (num % i === 0)
        {
            return false;
        }
    }
    return true;
}
console.log(10 + " isprime: " + prime(10));

//calculate factorial using a loop

function factorial (n)
{
    if (n < 0)
    {
        return -1;
    }
    if (n === 0)
    {
        return 1;
    }
    let result = 1;
    for (let i = 1; i <= n; i++)
    {
        result *= i;
    }
    return result;
}
console.log(20 + factorial(20));

