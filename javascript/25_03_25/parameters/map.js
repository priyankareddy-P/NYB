//map
//multiply numbers by 2

let numbers = [1,2,3,4,5];
let doubled = numbers.map(function(num)
{
    return num * 2;
});
console.log(doubled);

//multiply numbers with arrow function


//convert to uppercase

let a = ["apple", "banana", "cherry"];
let uppera = a.map(function(a){
return a.toUpperCase();
});
console.log(uppera);

//add 10 to each number

let b = [1,2,3,4,5];
let addedNumbers = b.map(b => b + 5);
console.log(addedNumbers);

//how to add items to a map

myMap.set('name', 'Priya');
myMap.set('age', 25);
console.log(myMap.get('name'));
console.log(myMap.get('age'));

//checking if a key exists
console.log(myMap.has('name'));

//deleting a value 

myMap.delete('age');

//weak set 
//it works like a set (collection of values), but it only stores objects,not strings or numbers.

let weakset = new WeakSet();
let student = {name:"priya"};
weakset.add(student);
console.log(weakset.has(student));

//add multiple objects to weakset

let weakSet = new WeakSet();
let car = {brand: "toyota"};
let bike = {brand: "pulsor"};
weakSet.add(car);
weakset.add(bike);
console.log(weakSet.has(car));
console.log(weakSet.has(bike));

//weakmap
//it works like a regular map, means keys must be objects(not strings or numbers)

let weakMap = new WeakMap();
let students = {name: "hima"};
weakMap.set(students, "Grade A");
console.log(weakMap.get(student));

//using weakmap for hidden data

let weakMap = new WeakMap();
let person = {};
function addSecret(person, secret)
{
    weakMap.set(person, secret);
}
function getSecret(person)
{
    return weakMap.get(person);
}
addSecret(person, "loves Pizza");
console.log(getSecret(person));


//add an array to a weakset

let weakSet = new weakSet();
let myArray = [1,2,3];
weakSet.add(myArray);
console.log(weakSet.has(myArray));

//add multiple objects to a weakset 

let weakSet = new WeakSet();
let obj1 = {name:"Priyanka"};
let obj2 = {name:"Hima"};
weakSet.ad(obj1);
weakSet.add(obj2);

//check if object exists using .has()

let userSet = new WeakSet();
let user = {name:"Priya"};
userSet.add(user);
console.log(userSet.has(user));

//remove an object using .delete()

let group = new WeakSet();
let member = {name:"sunny"};
group.add(member);
group.delete(member);
console.log(group.has(member));

//try to add the same object twice

let obj = {value: 10};
let ws=new weakSet();
ws.add(obj);
ws.add(obj);
console.log(ws.has(obj));

//delete an object and check again

let Ws = new WeakSet();
let car = {model: "Suzuki"};
ws.add(car);
ws.delete(car);
console.log(ws.has(car));

//store user info using object key

let wm = new WeakMap();
let user = {name: "priya"};
wm.set(user, "Admin");
console.log(wm.get(user));

//checking if a key exists

let Wm = new WeakMap();
let student = {name:"sita"};
wm.set(student, "Grade A");
console.log(Wm.has(student));

//deleting a key

let Wm = new WeakMap();
let book = {title: "JS"};
Wm.set(book, 100);
wm.delete(book);
console.log(Wm.has(book));

//using an array as a key

let Wm = new WeakMap();
let myArray = [1,2,3,4];
Wm.set(myArray, "ArrayData");
console.log(Wm.get(myArray));

//Function as key

let Wm = new WeakMap();
function myFunc()
{
    Wm.ser(myFunc, "used in math");
    console.log(Wm.get(myFunc));
}