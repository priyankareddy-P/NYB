//multiplication program

for (let i = 1; i <= 10; i++) {
    console.log("5 x" + i + " = " + (5 * i));
}


//sum of odd numbers program

let sum = 0;
for (let i =1; i <=50; i++) {
    if (i % 2!== 0){
        console.log(i);
        sum +=i;
    }
}
console.log("Sum of all odd numbers between 1 and 50 is:", sum)

//print all multiples of 5 from 1 to 100

for (let i=1; i<= 100; i++)
{
    if (i% 5===0)
    {
        console.log(i);
    }
}