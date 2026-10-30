function showEndMessage(){
    console.log("Welcome to the cpurse!");
}

function greetUser(name, callback){
    console.log("Hello " + name);

    callback();
}

greetUser("Binit", showEndMessage);




