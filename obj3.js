var name =  "abcdefghijklmnopqrstuvwxyz";
var data = {};
for(var i=0;i<name.length;i++)
{
  var char =name[i];
  for(var j=1;j<6;j++)
 
  {
    data[name[i]]=name[i] +"-" + j;
  }
}


for(k in data)
{
  console.log(k+" "+data[k])
}