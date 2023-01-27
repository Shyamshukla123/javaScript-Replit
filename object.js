var user = {

  name    : "shyam",
  age     : 22,
  gender  : "m",
  city    : "nashik",
  hobbies : "dancing",
   welcome: function()
   {
    console.log("hello" + this.name);
  }

};

user.welcome()
//delete user["age"]
//console.log(user);
//console.log(Object.keys(user)+" "+Object.values(user));
//for(k in user)
//{
  //console.log(user[k])
//}


//console.log(use)