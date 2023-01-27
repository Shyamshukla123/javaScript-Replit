var str ="lego!";
for(var i=0;i<str.length;i++)
{
  var newStr ="";
  for(var j=i;j<str.length;j++)
  {
    newStr =newStr + str.charAt(j);
    console.log(newStr)
  }
}