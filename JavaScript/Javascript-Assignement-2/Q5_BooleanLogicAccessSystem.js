

let isdoorLocked = true;
let isWindowclosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

if(isAlarmOn && isdoorLocked && isWindowclosed && isOwnerInside){
    console.log("secure");
}else{
    console.log("Unsafe");
}

isOwnerInside = false;

if(isAlarmOn && isdoorLocked && isWindowclosed && isOwnerInside){
    console.log("Secure");
}else{
    console.log("Unsafe");
}



console.log("Any opening detected:", !isdoorLocked || !isWindowclosed);