var arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9]  
];
var rows =arr.length;
var colm = arr[0].length;

for(var j=0;j<colm;j++)
{
 var sum = 0;
 for(var i=0;i<rows;i++)
 {
   if(arr[i][j]%2==0)
  {
    sum =sum +arr[i][j];
  }
 }
    console.log(sum);
  
}
