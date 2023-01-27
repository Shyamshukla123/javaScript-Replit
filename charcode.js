var s ="aba";
var sum =0;
for(var i =0;i<s.length;i++)
{
  sum =sum + s.charCodeAt(i)-96;
}
console.log(sum)