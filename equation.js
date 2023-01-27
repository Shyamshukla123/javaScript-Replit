var n =3;
var m =9;
var count =0;
for(var x =0; x<n;x++)
{
  for(var y =0;y<m;y++)
  {
    if(x**2+y==n && y**2+x==m)
    {
      count++;
    }
  }
}
console.log(count)