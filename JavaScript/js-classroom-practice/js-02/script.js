
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

    // checkPassword(password)






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


    // task 4: 


    function generateOTP(){

        let min = 1000;
        let max = 9999;
        let otp = Math.floor(Math.random() * (max - min)) + min;
        return otp;
        // return otp+"";
    //  let otp= Math.floor(Math.random()*500)+500;
    //  return otp;
   }
//    console.log(typeof generateOTP());
   console.log(generateOTP());

    


   // task 5: generate random hex color code digit
   // background color : #ffffff
