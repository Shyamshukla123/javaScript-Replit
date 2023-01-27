var num=6;
for(var i=1; i<=num;i++)
{
  if(i%2==1)
  {
    for(var j=1;j<=num;j++)
    {
      process.stdout.write("_")
    }
   console.log()
  }
  else
  {
    if(i%2==0)
    {
      for(var k=1;k<=num;k++)
      {
        process.stdout.write("*");
      }
    }
    console.log();
  }
}
