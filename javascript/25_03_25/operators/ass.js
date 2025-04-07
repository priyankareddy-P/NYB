let sum = 0;
for(let i = 0; i< grades.length; i++) {
    sum += grades[i];
}
let average = sum/grades.length;

console.log("average Grade:", average);

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
else {
    console.log("Failing.");
}