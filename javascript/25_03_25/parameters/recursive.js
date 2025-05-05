//function currying
//function without currying

function add(a,b)
{
    return a + b;
}
console.log(add(2,3));
console.log(add(10));

//function using currying

function add(a)
{
    return function(b)
    {
        return a + b;
    };
}
console.log(add(2)(3));

//subtraction

function sub(a)
{
    return function(b)
    {
        return a - b;
    };
}
console.log(sub(5)(3));

//multiply

function multiply(a)
{
    return function(b)
    {
        return function(c)
        {
            return a * b * c;
        };
    };
}
console.log(multiply(2)(3)(5));


//Recursive functions

// function hello (a)
// {
//     return a+hello(a-1)
// }
// console.log(hello(5));

//count down using recursion

function countdown(n)
{
    if (n===0)
    {
        console.log("priya!");
        return;
    }
    console.log(n);
    countdown(n-1);
}
countdown(10);

//factorial using recursion

function factorial(n)
{
    if (n===1)
    {
        return 1;
    }
    return n * factorial(n-1);
}
console.log(factorial(5));

// how to print numbers from 1 to N

function printnumbers(n)
{
    if (n===0)
    {
        return;
    }
    printnumbers(n-1);
    console.log(n);
}
printnumbers(10);

//how to print sum of natural numbers (1 to N)

function sum(n)
{
    if(n===0)
    {
        return 0;
    }
    return n + sum(n-1);
}
console.log(sum(5));

//how to print sum of even numbers ( 1 to N)

function sum(n)
{
    if(n===0)
    {
        return 0;
    }
    return n + sum(n-1);
}
console.log(sum(20));

//reverse a string

function reverse(str)
{
    if (str === "")
    {
        return "";
    }
    return reverse(str.slice(1)) + str[0];
}
console.log(reverse("dad"));

//higher order functions
//function that returns another function

function multiplyBy(x)
{
    return function(y)
    {
        return x*y;
    };
}
let multiplyBy5 = multiplyBy(5);
console.log(multiplyBy5(8));

//map
//change each item in array

let numbers = [1,2,3];
let doubled = numbers.map(function(num)
{
    return num * 2;
});
console.log(doubled);

//convert to uppercase

let fruits = ["apple", "banana", "cherry"];
let upperFruits = fruits.map(function(fruit)
{
    return fruit.toUpperCase();
});
console.log(upperFruits);

//add 10 to each number

let num = [5, 10, 15];

let newNumbers = numbers.map(function(num)
{
    return num + 10;
});
console.log(newNumbers);

//filter
//keeps only items that match the condition

//keep only even numbers

let nums = [1,2,3,4,5,6,7,8,9,10];
let even=nums.filter(function(n)
{
    return n%2 ===0;
});
console.log(even);
