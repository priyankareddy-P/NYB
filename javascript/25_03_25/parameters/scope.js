//global scope

let a = 10;
console.log(a);

//function scope

function name()
{
    let name = "priya"; //function scope
    console.log(name);
}
name();
console.log(name);

//blockscope with let and const
//let inside a block

{
    let name = "priya";
    console.log(name);
}
console.log(name);

//loop with let block scope

for(let i = 1; i <=3; i++)
{
    console.log("Inside loop:",i);
}
console.log("outside loop:",i);

//var vs let in block

{
    var x = 10;
    var y = 20;
}
console.log(x);
console.log(y);