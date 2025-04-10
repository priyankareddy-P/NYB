//parameters

//welcome message

function welcome(studentName)
{
    console.log("Welcome, " + studentName + "!");
}
welcome("Priyanka");

//Add three numbers

function add(a,b,c)
{
    console.log("sum:", a+b+c);
}
add(10,20,30);

//Full name

function fullname(first, last)
{
    console.log("fullname: " + first + " " + last);
}
fullname("priyanka", "Reddy");

//calculate area of a square

function areasquare(area,area)
{
    console.log("area is: " + (area * area));
}
areasquare(3,9);

//calculate area of a rectangle

function arearectangle(length,width)
{
    console.log("area is: " + (length * width));
}
arearectangle(4,7);

//cube of a number

function findcube(number)
{
    let cube = number*number*number;
    console.log("cube of",number,"is:" ,cube);
}
findcube(5);

///Arguments

function greet(name)
{
    console.log("Hello, " + name );
}
greet("priyanka");

function greet(name)
{
    console.log("hello, " + name );
}
greet("hima");

//add two numbers

function add(num1 ,num2)
{
    console.log("sum",num1 +num2);
}
add(5,3);

//multiplication

function multiply(a,b)
{
    let result = a*b;
    console.log("multiplication result:", result);
}
multiply(5,8);

//Default parameters
//add numbers with default

function add(a=5,b=10)
{
    console.log("add is:", a+b);
}
add();
add(8);
add(4,6);

//show age with default

function showage(age = 15)
{
    console.log("your age is:", age);
}
showage();
showage(25);
showage(80);
showage(75);

//Arguments objects
//add two numbers using arguments

function addnumbers()
{
    console.log(arguments[0] + arguments[1]);
}
addnumbers(10,5);

//print all arguments

function printargs()
{
    for (let i = 0; i < arguments.length; i++)
    {
        console.log("arguments", i + 1,":", arguments[i]);
}
}
printargs("Priyanka", 23,"Anantapur");

//find maximum value

function findmax()
{
    let max = arguments[0];
    for (let i = 1;i<arguments.length;i++)
    {
        if(arguments[i] >max)
        {
            max = arguments[i];
        }
    }
    console.log("maximum value is:",max);
}
findmax(5,25,13,99,64);

//rest parameters
//add all numbers using rest parameter

function addnumbers(...numbers)
{
    let sum = 0;
    for (let num of numbers)
    {
        sum = sum + num;
    }
    console.log("Total sum is:", sum);
}
addnumbers(10,20,30,40,50,50);

//arrow functions
//add two numbers

let sum = (x,y) => x+y;
console.log(add(5,3));

//greet someone

let greeting = (name) => "hello, " + name 
console.log(greet("priyanka"));

//multiply a number by 4

let double = (x) => x*4;
console.log(double(4));

//square of a number

let square = (n) => n*n;
console.log(square(7));

//arrow function with no parameters

let sayhello = () => console.log("hello world.");
sayhello();

//find area of a circle

let area = (r) => 3.14 * r * r;
console.log(area(7));

