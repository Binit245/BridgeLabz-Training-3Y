

// let headingE1 = document.getElementById("heading");   // through id
// let headingE1 = document.getElementsByClassName("headingclass");
// let headingE1 = document.querySelector("#heading");
// headingE1.style.color = "pink";

// in css background-color:"red"
// headingE1.style.backgroundColor = "black";
// headingE1.textContent = "qwerty"       // change the content of that element
// headingE1.innerHTML += "<h2>hellow this is a new element </h2>"  // insert nested heading



let headingE1 = document.querySelector("#heading");


let btnE1 = document.querySelector("#btn");


// let fun = ()=>{
//     headingE1.style.color = "pink";
// }


// increment logic
let count = 0
btnE1.addEventListener("click",()=>{
    count++;
    headingE1.style.color = "pink";
    headingE1.textContent = count
})

// decrement logic

let btnE2 = document.querySelector("#btn1");
let count1 = 0;
let fun2 = () => {
    count1--;
    headingE1.textContent = count1;
}
btnE2.addEventListener("click", fun2);


boxE1.addEventListener("click", ()=>{
    boxE1.style.backgroundcolor="red";

})




console.log(headingE1)

console.log("hello")





























































