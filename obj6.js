var n=30;

var name = "abcdefghijklmnopqrstuvwxyz";
var data ={};
for(var i =0;i<name.length;i++)
{
  var char =name[i];
  if(data[char]===undefined)
  {
    data[char]=n+i;
  }

};
// console.log(data)
for(k in data)
{
  console.log(k + "-" + data[k])
}