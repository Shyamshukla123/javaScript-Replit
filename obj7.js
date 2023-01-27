var N =30;
var str="abc"
var lower ="abcdefghijklmnopqrstuvwxyz";
var data ={};
for(var i=0;i<str.length;i++)
{
  var name = str[i];
  if(data[name]==undefined)
  {
    data[name]=N+i;
  }
}
for(k in data)
{
  var sum =0;
  for(var j=0;j<str.length;j++)
  {
    sum = sum +data[str[j]]
  }
 }
 console.log(sum)
