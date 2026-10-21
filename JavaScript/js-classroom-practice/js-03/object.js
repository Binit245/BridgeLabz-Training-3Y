




// json data

// let student = {
//     id:101,
//     name:"raj",
//     marks:80,
// }
// let ans = JSON.stringify(student)
// JSON.parse(ans)



// objects

// let student = {
//     id:101,
//     name:"raj",
//     marks:80,
// }

// // bracket notation

// console.log(student["name"]);

// // dot notation

// console.log(student.name)    // read 
// student.city = "mathura";    // add key value in obj
// student.marks = 50;          // update
// delete student.id            // delete
// console.log(student)


// objects

// let student = {
//     id:101,
//     name:"raj",
//     marks:80,
//     address:{
//         city:"mathura",
//         pincode:87966
//     },
//     displayInfo:function(){
//         console.log(`my name is ${this.name} and got marks ${this.marks}`)
//     }
// }

// let query = "city"

// query.toUpperCase;


// console.log(student["address"][query]);  // 
// // console.log(student.address.city);


// student.displayInfo()




let listOfStudents = [
        {id:101, name:"rahul", marks:80, gender:"male"},
        {id:102, name:"binit", marks:70, gender:"male"},
        {id:103, name:"riya", marks:90, gender:"female"},
        {id:104, name:"divya", marks:60, gender:"female"},
        {id:105, name:"deepak", marks:50, gender:"male"}
    
];

for(let i =0; i<listOfStudents.length; i++){
        let ans = `my id is ${listOfStudents[i].id} and name is ${listOfStudents[i].name} and marks is ${listOfStudents[i].marks}`
        console.log(ans);
}      

// for of loop

for(let x of listOfStudents){
        let ans = `my id is ${x.id} and name is ${x.name} and marks is ${x.marks}`
        console.log(ans)
}




// print list of name from listOfStudent in a new array

let fun = (x)=>{
        let upper = x.name.toUpperCase();
        return upper;

}

let nameOfList = listOfStudents.map(fun)

console.log(nameOfList)



// filter the male candidate

let fun1 = (x)=>{
        return x.gender==="male";
}

let maleCandidate = listOfStudents.filter(fun1)

console.log(maleCandidate)


let fun2 = (x)=>{
        return x.gender==="female";
}
let femaleCandidate = listOfStudents.filter(fun2)
console.log(femaleCandidate)




//  map -> new array
// filter -> new array
// foreach -> void


let res = listOfStudents.map((x)=>{

        if(x.gender=="male"){
                x.name = "mr. " + x.name;
                return x;
        }else(x.gender=="female")
        {
                x.name = "ms. " + x.name;
                return x;
        }
        // return x.name = "ms." + x.name;
        // return x;
})

console.log(res)






























