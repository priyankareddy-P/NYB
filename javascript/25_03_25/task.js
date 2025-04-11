//maximum of two numbers

function findmax(a,b) {
    if (a > b)
    {
        return a;
    }
    else if (b > a)
    {
        return b;
    }
    else{
        return a;
    }
}
let result = findmax(15,25);
console.log("The maximum number is:", result);

//calculator

function calculator(a,b,operation)
{
    if (operation === "+")
    {
        return a + b;
    }
    else if (operation === "-")
    {
        return a-b;
    }
    else if (operation === "*")
    {
        return a*b;
    }
    else if (operation === "/")
    {
        if (b === 0)
        {
            return "Division by zero";
        }
        else{
            return a/b;
        }
     } else {
            return "Invalid operation";
        }
    }
console.log(calculator(10,5,"+"));
console.log(calculator(10,4,"-"));
console.log(calculator(7,3,"*"));
console.log(calculator(7,0,"/"));

//check positive /negative

function checkNumber(number)
{
    if (typeof number !== "number")
    {
        return "Invalid";
    }
    if (number > 0)
    {
        return "positive";
    }
    else if (number < 0)
    {
        return "negative";
    } else {
        return "zero";
    }
}
console.log(checkNumber(10));
console.log(checkNumber(0));
console.log(checkNumber(null));


//find array sum

function arraysum(arr)
{
    if(arr.length ===0)
    {
        return 0;
    }
    let sum = 0;
    for(let i = 0;i<arr.length;i++)
    {
        sum +=arr[i];
    }
    return sum;
}
console.log(arraysum([10,20,30]));
console.log(arraysum([]));
console.log(arraysum([5]));

//find average of array

function arrayaverage(arr)
{
    if(arr.length === 0)
    {
        return 0;
    }
    let sum = 0;
    for(let i = 0; i < arr.length; i++)
    {
        sum += arr[i];
    }
    let average = sum /arr.length;
    return average.toFixed(2);
}
console.log(arrayaverage([10,20,30]));
console.log(arrayaverage([7,5,9]));
console.log(arrayaverage([]));