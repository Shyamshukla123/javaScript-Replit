var name = "wgdjskndhsjmswtsjskck";
var data ={};
for(var i =0;i<name.length;i++)
{
  var char =name[i];
  if(data[char]===undefined)
  {
    data[char]=1;
  }
  else
  {
    var prev= data[char];
    data[char]=prev+1;
  }
}

for(k in data)
{
  console.log(k + "-" + data[k])
}