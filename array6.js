var num = [2,8,10,0,5]
var max = num[0];
for(var i =0;i<num.length;i++)
{
  if(num[i]>max)
  {
    max = num[i];
  }
}
console.log(max);