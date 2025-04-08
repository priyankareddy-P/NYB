let sum = 0;
for(let i = 0; i<length; i++) {
    sum += [i];
}
let average = sum/length;

console.log("average:");

if (average >=90) {
    console.log("Excellent.");
}
else if(average >=80) {
    console.log("Good job.");
}
else if(average >=70){
    console.log("Needs improvement.");
}
else if(average >=60) {
    console.log("passing, but could be better.");
}
else if(average<=60) {
    console.log("Failing.");
}

