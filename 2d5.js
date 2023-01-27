function arr(input)
{
   
  for(var i=0;i<input.length;i++)
  {
    if(input[i]==42)
    {
       console.log("Yes");
       return;
    }
  }
  console.log("No")
}
var arr1 =[2,5,7,42,5];
arr(arr1)