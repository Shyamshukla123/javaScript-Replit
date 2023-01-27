var S ="thisracecarisgood";
var arr =[];
var data =[];
var data1=[];
for(var i=0;i<S.length;i++)
{
  var str1 ="";
  {
    for(var j =i;j<S.length;j++)
    {
      str1=str1+S[j];
      arr.push(str1);
    }
  }
}
//console.log(arr)
for(var m =0;m<arr.length;m++)
{
  var str2="";
  
    for(var n = arr[m].length-1;n>=0;n--)
    {
       str2=str2 +arr[m][n];
    }
  
  if(str2==arr[m])
  {
    data.push(str2);
  }
}
//console.log(data)
for(var k=0;k<data.length;k++)
{
  var b = data[k].length;
   data1.push(b)
}
//console.log(data1)
var max =data1[0];
for(var l =0;l<data1.length;l++)
{
  if(max < data1[l])
  {
    max = data1[l];
  }
 
}
console.log(max)