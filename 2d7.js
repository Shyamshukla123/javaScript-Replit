 var num =1221;
 var newname =num;
 
 var sum =0;
 while(num>0)
 {
      var n =num %10;
     sum =(sum*10) + n;
     num =parseInt(num/10);
   
 }
 //console.log(sum)
 
if(newname=sum)
{
    console.log("Yes")
}
else
{
    console.log("No")
}