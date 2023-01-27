for(var i=1;i<=3;i++);
{
  for(var j = 1; j<=16; j++)
  {
      process.stdout.write(j+" ");
      {
        if(j%4==0)
        {
           console.log();
        }
      }
  }
}