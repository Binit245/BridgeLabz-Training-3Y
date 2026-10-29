
// sync
// async : setTimeout, setInterval, fetch, event

// web api- fetch, setTimeout, call stack, event, loop, microstack queue, macrotask queue



//  by callback


// console.log("start")


// function getUser(callback){
//     setTimeout(()=>{
//         console.log("user data ....");
//         callback()
//     },3000);
// }

   
// function getUserBankDetail(callback){
//     setTimeout(()=>{
//         console.log("User Bank details");  
//         callback()     
//     },1000);
// }

// function getUserInc(){
//     setTimeout(()=>{
//         console.log("User insurance data ....")
//     },2000)
// }


// // callback, promises, async await   -- asyncronus ko syncronus me behave ke liye use krte hain inko


// // callback hell
// getUser(()=>{
//     getUserBankDetail(()=>{
//         getUserInc()
//     })
// })
// // getUserBankDetail();


// console.log("end")


// Promise object -- object bnate hain new keyword se

// let mypromise = new Promise((resolve,reject)=>{
//     let age = 10;

//     if(age>18){
//         resolve("age is valid")
//     }else{
//         reject("age is invalid")
//     }

// });

// mypromise
// .then((msg)=>{            // from then keyword promise resolve hote hain 
//     console.log(msg)
// })

// .catch((err)=>{            // from catch keyword promise reject hote hain 
//     console.log(err)
// })



// by promises

console.log("start")


function getUser(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("User data ....");
            resolve();
        },3000);
    });
}

   
function getUserBankDetail(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("User Bank details");  
        resolve();     
    },1000);
    });
}

function getUserInc(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("User insurance data ....")
        resolve();
    },2000);
    });
}


// callback, promises, async await   -- asyncronus ko syncronus me behave ke liye use krte hain inko


// callback hell
// getUser(()=>{
//     getUserBankDetail(()=>{
//         getUserInc()
//     })
// })
// getUserBankDetail();


// promise chaining
// getUser()
// .then(()=>{
//     return getUserBankDetail();
// }).then(()=>{
//     return getUserInc();
// }).then(()=>{
//     console.log("Process....end")
// })
// .catch((err)=>{
//     console.log(err)
// })



//  async await -------------------------------

async function call(){
    await getUser();  //3s
    await getUserBankDetail();   //1s
    await getUserInc()    // 2s
}

call()



console.log("end")




// object creation : object literal, functional constructor, class, object.create()
