function isodd(num)
{
  var od = false;
  if(num%2==1)
  {
    od = true;
  }
  return od;
}


  function odd(num)
{
  
  for(var i=0;i<num;i++)
  {
    var b = isodd(i)
    if(b)
    {
      console.log(i);
    }
   }
  
}

odd(20)