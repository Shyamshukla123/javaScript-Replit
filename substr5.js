var str ="a3b2";
var str1="";
for(var i=0;i<str.length;i=i+2)
{
  for(var j=0;j<str[i+1];j++)
  {
    str1=str1 + str[i];
  }
}
console.log(str1);