//student data

let student = {name:"priyanka", age:23, city:"Anantapur"};
for (let key in student){
console.log(key + ":" + student[key]);
}

//month display

let monthNumber = 9;
switch (monthNumber) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("september");
        break;
    case 10:
        console.log("october");
        break;
    case 11:
        console.log("november");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid month number");
        
}


//create an array

let marks = [90,20,30,50,55];
let sum = 0;
for (let mark of marks) {
    sum +=mark;
}
let average = sum/marks.length;
console.log("Average marks:",average);

