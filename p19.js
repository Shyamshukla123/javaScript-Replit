var num = 11;
if(num==1)
{
  console.log("neither a prime noe a composite");
}
else if(num<0)
{
  console.log("not a prime number");
}
else
{ 
  for(var i=2;i<num;i++)
  {
    if(num%i==0)
    {
      var a = (num + " is not a prime");
      break;
    }
    else
    {
      var a = (num + " is a prime");
    }
  }
  console.log(a);

}