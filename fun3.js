function even(num)
{
  return num%2==0;
}

function sqr(num)
{
  return num**2;
}


function cub(num)
{
  return num**3;
}



function sqrcub(x)
{
var en= even(x);
if(en)
{
  var s = sqr(x);
  console.log(s);
}
else
{
  var c = cub(x);
  console.log(c);
}
}




for(var i=1;i<20;i++)
{
  sqrcub(i);
}