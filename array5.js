var num =[2,5,3,8,1];
var min = num[0];
for(var i = 0;i<num.length;i++)
{
  if(num[i]<min)
  {
    min = num[i];
  }
}
console.log(min);