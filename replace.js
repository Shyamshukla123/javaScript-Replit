var str = "The quick brown fox jumps over the lazy dog . If the dog reacted, was it really lazy?";
var a = str.split(" ");
for(var i=0;i<a.length;i++)
{
  if(a[i]=="dog")
  {
    a[i]="monkey";
    break;
  }
}
console.log(a.join(" "));