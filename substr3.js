var num =1221;
var newnum =num.toString();
var str ="";
for(var i =newnum.length-1;i>=0;i--)
{
  str =str + newnum[i];
}
//console.log(str)
if(str==num)
{
  console.log("pallindrom");
}
else
{
  console.log("not a pallindrome")
}