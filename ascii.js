var s ="aba";
var sum =0;
for(var i=0;i<s.length;i++)
{
  var val =s.charCodeAt(i)-96;
 sum =sum + val
}
console.log(sum);