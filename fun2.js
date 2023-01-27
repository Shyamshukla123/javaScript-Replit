function iseven(num)
{
  var a = true;
  if(num%2!=0)
  {
    a=false;
  }
  return a;
}




for(var i=1;i<21;i++)
{
  var b= iseven(i);
  if(b)
  {
    console.log( i + " is even")
  }
}