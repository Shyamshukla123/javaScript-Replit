var arr =[1,2,3,4,2,1,6,5]
var count =0;
for(var i =0;i<arr.length;i++)
{
  if(i==0)
  {
     if(arr[i]>arr[i+1])
     {
       count++;
     }
   
  }
  else if(i==arr.length-1)
  {
    if(arr[i]>arr[i-1])
    {
      count++
    }
  }
  else
  {
    if(arr[i]>arr[i+1]&&arr[i]>arr[i-1])
    {
      count++
    }
  }
}
console.log(count);
