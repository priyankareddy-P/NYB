//for each

let numbers = [1,2,3,4,5,6,7];
numbers.forEach(function(num)
{
    console.log(num);
});


//add 10 to each number

let marks = [20,30,70,60];
marks.forEach(function(marks)
{
    console.log(marks + 10);
});

//foreach with arrow function

let fruits = ["apple","banana", "cherry"];
fruits.forEach(fruit =>
{
    console.log("I like", fruit);
});

//convert a string into an array

let str = "apple, banana, cherry";
let vegetables = str.split(" ");
console.log(str);

//split each character

let word = "hello";
let letters = word.split(" ");
console.log(letters);

//fill

let arr = [1,2,3,4,5];
arr.fill(0);
console.log(arr);

//fill part of the array

let a = [1,2,3,4,5];
a.fill(9,1,5);
console.log(a);

//fill new empty array

let c = new Array(5).fill("Hi");
console.log(c);

//sorting

let x = [100,5,20];
x.sort();
console.log(x);

//sort numbers

let b = [100,20,30,40,5];
b.sort(function(a,b)
{
    return a-b;
});
console.log(b);

//sort words alphabetically

let d = ["banana", "apple", "cherry", "orange"];
d.sort();
console.log(d);

//sort in reverse order

let e = [10,5,8];
d.sort(function(a,b)
{
    return b-a;
});
console.log(e);

//compare each value using for loop

let y = [5,12,8,20];
for (let i = 0; i < y.length;i++)
{
    if(y[i] > 10)
    {
        console.log(y[i] + " is greater than 10 ");
    }
}





