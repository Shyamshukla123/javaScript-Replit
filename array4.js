/*var name = "shyam";
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var newname = "";
for(var i =0;i<name.length;i++)
{
  for(var j =0;j<lower.length;j++)
  {
    if(name[i]==lower[j])
    {
      newname = newname + upper[j];
    }
  }
}
console.log(newname);
*/

var name = "shyam";
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//var newname = "";
for(var i =0;i<name.length;i++)
{
  for(var j =0;j<lower.length;j++)
  {
    if(name[i]==lower[j])
    {
      //newname = newname + upper[j];
      //console.log(upper[j])
      process.stdout.write(upper[j])
    }
  }
}
//console.log(newname);