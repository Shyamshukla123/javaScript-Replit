for(var i =1;i<=5;i++)
{
  for(var j=4;j>=i;j--)
  {
    process.stdout.write(" ");
  }
   for(var k=1;k<=i;k++)
    {
        process.stdout.write("* ");
    }
      console.log()
}
