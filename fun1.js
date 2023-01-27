function iseven(num)
{
  var e = false;
  if(num%2==0)
  {
    e = true;
  }
  return e;
}

function iseven2(num)
{
  var e = false;
  if(num%2==0)
  {
    e = true;
  }
  console.log(e);
}
var a = iseven(4);
var b = iseven2(4);
console.log(a);
//console.log(b)
