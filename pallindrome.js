var str = "ankush";
var str1=""
for(var i = 0;i<str.length;i++)
{
  if(str[i]==str[str.length-1-i])
  {
   str1=str1+str[i];
  }
}
if(str1==str)
{
  console.log("pallindrome")
}
else
{
  console.log("not pallindrome")
}