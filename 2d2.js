var arr = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12]
];

for(var i=0;i<arr.length;i++)
{
  if(i%2==0)
  {
    for(var j=0;j<4;j++)
    {
      process.stdout.write(arr[i][j]+" ");
    }
    console.log();
  }
  else
  {
    for(var j=3;j>=0;j--)
    {
      process.stdout.write(arr[i][j]+" ");
    }
    console.log();
  }
}