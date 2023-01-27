var N=5;
var name = "abcdefghijklmnopqrstuvwxyz";
var data ={};
for(var i =0;i<name.length;i++)
{
  var char =name[i];
  if(data[char]===undefined)
  {
    data[char]=i+1;
  }
 
};

for(k in data)
{
  console.log(k + "-" + data[k])
  if(data[k]==N)
  {
    break;
  }
}