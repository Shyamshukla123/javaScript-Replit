var num =[5,8,11,13,10]
for(var i = 0;i<num.length;i++)
{
  for(var j=2;j<num[i];j++)
  {
   if(num[i]%j==0)
   {
     console.log(num[i]+" is not a prime number");
     break;
   }
  }
  if(num[i]==j)
  {
    console.log(num[i]+" is a prime number");
  }
}