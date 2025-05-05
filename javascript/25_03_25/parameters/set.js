//to create a empty set

let myset = new Set();

//to add a values in a set

myset.add(1);

//delete a value in a set

myset.delete(1);

//to know a particular item in a set

myset.has(2);

//clear all values in a set

myset.clear();

//add fruits to a set

let myfruits = new Set();
myfruits.add("apple");
myfruits.add("banana");
myfruits.add("apple");
myfruits.add("cherry)");
console.log(myfruits);

//add numbers to a set

let numbers = new Set();
numbers.add(5);
numbers.add(7);
numbers.add(5);
numbers.add(8);
console.log(numbers);

//delete a fruit to a set

let fruits = new Set(["apple", "banana", "cherry"]);
fruits.delete("banana");
console.log(fruits);

//delete all items 

let items = new Set(["pen", "pencil","eraser"]);
items.delete("pen");
items.delete("pencil");
items.delete("eraser");
console.log(items);

//remove duplicate values from an array
//includes

var list = ["priya","hima","rekha","raji"];
console.log(list.includes("hima"));
console.log(list.includes("varshini"));

//using includes with strings

let message = "Hello world";
console.log(message.includes("world"));
console.log(message.includes("bye"));

//example

function hello(arr)
{
    console.log("hello");
    let newarr = [];
    for (let i of arr)
    {
        if(newarr.includes(i))
        {
            continue;
        }
        else
        {
            newarr.push(i);
        }
    }
    return newarr;
}


//Flatting of array

let a = [1,2,[3,4],[5,6]];
let flatarray = a.flat();
console.log(flatarray);

//deep array

let deeparray = [1,[2,[3,4]]];
let flat = deeparray.flat(2);

//find array depth using recursion

function getArrayDepth(arr)
{
    if(!Array.isArray(arr)) return 0;
    let max = 0;
    for (let i = 0; i<arr.length;i++)
    {
        let depth = getArrayDepth(arr[i]);
        if(depth > max)
        {
            max=depth;
        }
    }
    return max + 1;
}
let myArray=[1,[2,[3,[4]]]];
console.log(getArrayDepth(myArray));