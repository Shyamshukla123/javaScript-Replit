var count =0;
var arr =[1,2,3,4,5];
//var  arr1=[];
for(var i=0;i<arr.length;i++)
{
  var str="";
  for(var j=i;j<arr.length;j++)
  {
   str=str + arr[j];
   //arr1.push(str);
  }
    var k =0;
    var m =str.length-1;
    while(k<str.length && m >= 0)
   {
     if(str[k]%2==0 && str[m]%2==0)
     {
       count++;
     }
     k++;
     m--;
   }
  }

console.log(count)