var n =30;
var lower = "abcdefghijklmnopqrstuvwxyz";
var data ={};
for(var i=0;i<lower.length;i++)
{
  if(data[lower[i]]==undefined)
  {
     data[lower[i]]=i+n;
  }
}


for(k in data)
{
  console.log(k +"-"+data[k]);
}