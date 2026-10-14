
// console.log("hello")

// {
//     var a = "hello";
//     console.log(a);
// }
// console.log(a); // accessible outside the block


// == vs ===
// null vs undefined
// string concat
// string interpolation

// let name = "Binit";
// let city = "Pune";
// let msg = "Hello " + name + " from " + city; // string concat
// console.log(msg);

// let msg2 = `Hello ${name} from ${city}`;
// console.log(msg2);


let username = "   Binit   "



// method vs function

console.log(username.trim())
console.log(username.toLowerCase())
console.log(username.toUpperCase())
console.log(username.includes("kumar"))
console.log(username.trim().toUpperCase().split(" "))
console.log(username.slice(3,5))
console.log(username.slice(5))


let passsword = "   Binit@123     "
function checkPassword(password){
    // password has at least 6 characters
    // one uppercase
    // one lowercase
    // one digit
    // one special symbol

    let pwd = password.trim();
    if(pwd.length<6)
        return false;

    let upper = false;
    let lower = false;
    let digit = false;
    let special = false;

    for(let i =0;i<pwd.length;i++){
        let ch = pwd.charAt(i);

        if(ch >= 'A' && ch <= 'Z') {
            upper = true;
        }
        if(ch >= 'a' && ch <= 'z') {
            lower = true;
        }
        if(ch >= '0' && ch <= '9') {
            digit = true;
        }
        if(ch === '@' || ch === '#' || ch === '$' || ch === '%') {
            special = true;
        }
    }

    if (lower && upper && digit && special) {
        return true;
    } else {
        return false;
    }

    let ans = checkPassword(passsword); 

    console.log(ans);

    
    }

    






    // task 2: generate 4-digit OTP

    // function generateOTP(){
    //     let otp = Math.floor(Math.random()*9000) + 1000;
    //     return otp;
    // }

    // let otp = generateOTP();
    // console.log(otp);
    // console.log(typeof otp);








    // task 3: generate 4-digit OTP

//    function generateOTP(){
//      let otp = "";
//      for(let i=0;i<4;i++){
//         let num = Math.floor(Math.random()*10);
//         otp += num;
//      }
//      return otp;
//    }
//    console.log(generateOTP());






    // task 4: generate 4-digit OTP


    // function generateOTP(){

    //     let min = 1000;
    //     let max = 9999;
    //     let otp = Math.floor(Math.random() * (max - min)) + min;
    //     return otp;
        // return otp+"";
    //  let otp= Math.floor(Math.random()*500)+500;
    //  return otp;
//    }
//    console.log(typeof generateOTP());
//    console.log(generateOTP());

    







   // task 5: generate random hex color code digit
   // background color : #ffffff   // 0-f
   // background color : #000000   // 0-f
    

//    function generateHexColorCode(){
//     let hex = "#";
//     let hexDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

//     for(let i=0;i<6;i++){
//         let randomIndex = Math.floor(Math.random() *16);  // 0-15 
//         hex += hexDigits[randomIndex];
//     }
//     console.log(hex);
//     document.body.style.backgroundColor = hex;
//    }  
//    generateHexColorCode();









// task 6: generate random password of length 8

// function generateRandompassword(){
//     let num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//     let lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//     let upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
//     let special = ['@','#','$'];

//     for(let i=0;i<8;i++){
//         let randomIndex = Math.floor(Math.random() *4); // 0-3
//         if(randomIndex === 0){
//             let randomNumIndex = Math.floor(Math.random() * num.length);
//             console.log(num[randomNumIndex]);

//         }
//         if(randomIndex ===1){
//             let randomLowerIndex = Math.floor(Math.random() * lower.length);
//             console.log(lower[randomLowerIndex]);
//         }
//         if(randomIndex ===2){
//             let randomUpperIndex = Math.floor(Math.random() * upper.length);
//             console.log(upper[randomUpperIndex]);
//         }
//         if(randomIndex ===3){
//             let randomSpecialIndex = Math.floor(Math.random() * special.length);
//             console.log(special[randomSpecialIndex]);
//         }
//         console.log(randomIndex);
//     }
// }


   









// array methods
// let arr = ["apple", "mango", 10, 20, 30, true, false];
// console.log(arr)
// arr.push("grapes");  // add method at the end of the array
// console.log(arr)

// arr.unshift("mohan");  // add element at the start of the array
// console.log(arr)


// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// for(let x of arr){        // for of loop
//     console.log(x);
// }

// console.log(arr.slice(1,4));
// console.log(arr.includes("mango"));  // check the element is present in the array or not.

// arr.pop();  // remove the last element of the array
// console.log(arr);








// boolean
// true: "4567gfsja", -1, 124, [], {}, true 
// false: "", 0, null, undefined, NaN

let a ="hi";
if(a || 0){
    console.log("hi")
} else{
    console.log("hello")
}

console.log(Boolean(a));  







