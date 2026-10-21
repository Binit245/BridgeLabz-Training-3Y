
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
    

//   function generateHexColorCode(){
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

// let a ="hi";
// if(a || 0){
//     console.log("hi")
// } else{
//     console.log("hello")
// }

// console.log(Boolean(a));  








                                                         // type conversion



let result = 10 / "5";  // 2 because "5" is converted to number 5
console.log(result);
console.log(typeof result);



console.log(true + 3);  // 4 because true is converted to 1
console.log(false + 5);  // 5 because false is converted to 0




let result2 = "value is" + true;  // "value is" + 1 => "value is1"
console.log(result2);
console.log(typeof result2);  // string because true is converted to string "true"



// Explicit type conversion

// you manually convert a value using functions or operators. For example, you can use the Number() function to convert a string to a number, or the String() function to convert a number to a string.

let strNumber1 = "123";
let num1 = Number(strNumber1);   

console.log(num1, typeof num1);  //  123,number


let strNumber2 = "45.67";
let num2 = parseFloat(strNumber2);  // 45.67, number
console.log(num2, typeof num2);  // 45.67, number





// Number to String

let number1 = 100;
let str1 = String(number1);
console.log(str1, typeof str1); //  100 string


let number2 = 250;
let str2 = number2 + "";
console.log(str2, typeof str2);  // 250 string


// Boolean to number

let bool1 = true;
let num3 = Number(bool1);
console.log(num3, typeof num3);    // 1, number






                                      // function declearation


// function add(a,b){
//     let result = a+b;
//     console.log(result)
//     return result;

// }

// let a = add(10,20);
// console.log(a);

                                        // function expression

// let add = function(a,b){
//     return a+b;
// }

// let a = add(10,30);
// console.log(a)


                                        //  arrow function


// let add = (a,b)=>{     // let add = (a,b)a+b  ek line me return ke liye aise likh sakte hain arrow function ko
//     return a+b;
// }

// let a = add(10,30);
// console.log(a);



// let add = (a,b)=> a+b
// function calculate(a,b,callback){      // higher-order function
//     return callback(a,b);
// }

// let ans = calculate(10,30,add);
// let multi = calculate(20,10,(a,b)=>a*b);
// console.log(ans)
// console.log(multi)


let arr = [1,2,3,4,5];

let resul = arr.map((x)=>{
    return x*x
});

let even = arr.filter((x)=>{
    return x%2==0
});
console.log(even)

// let resul = arr.map(x=> x*2);

console.log(resul)





                                // Question Practice

// let arr3 =["apple", "mango","orange","apple","apple"];

// let result3 = arr3.filter((x)=>{
//     let ele = x.toLowerCase();

//     return ele != "apple"
    
// })
// console.log(result3)



                        // filter the fruit whose length is > 5

// let arr2 = ["apple", "mango","orange","apple","apple"];

// let result4 = arr2.filter((x)=>{
//     let len = 
// });





                                               // filter the age > 18


let arr3 = [12,34,9,60,36,24];









                                    // filter the furit start with "A" or 'a'

let arr4 = ["apple", "mango","orange","apple","apple"];







                                    // map the square of each element in new array

            
let arr5 = [1,2,3,4,5];






















