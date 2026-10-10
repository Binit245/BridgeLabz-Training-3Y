

let marks = [85, 90, 78, 88, 80];
let total =0;
let failed = false;

for(let i=0;i<marks.length;i++){
    total+=marks[i];

    if(marks[i]<35){
        failed=true;
    }
}

let average = total / marks.length;
let percentage = (total/500)*100;

console.log("Total Marks: " + total);
console.log("Average: " + average.toFixed(2));
console.log("Percentage: " + percentage.toFixed(2) +"%");

if(failed || percentage<50){
    console.log("Detained");
}else if(percentage>=85){
    console.log("Distinction");
}else{
    console.log("Promoted");
}