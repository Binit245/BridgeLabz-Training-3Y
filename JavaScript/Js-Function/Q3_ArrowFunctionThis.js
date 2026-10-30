const user = {
    name :"Binit",
    showName : ()=>{
        console.log(this.name);
    }
};

user.showName();

const updateUser = {
    Name : "Binit",
    showName: function(){
        console.log(this.name)
    }
};

updateUser.showName();