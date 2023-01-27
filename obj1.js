var user=
{
  name: "shyam",
  yob : 1999,
  gender : "m",
  age : function(){
    return 2021-this.yob;
  }
};
  
  var a = user.age();
 console.log(a);
  user.yob = 2001;
 var a = user.age();
 console.log(a);