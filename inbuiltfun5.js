/*var name ="shyam shukla"
for(var i=0;i<name.length;i++)
{
  console.log(name[i].toUpperCase()) 
}*/
/*var str =["a","b","c","d"]
console.log(str.slice(1,3))*/

var name = "mozila fire";
var b = name.split(" ");
var c= b.join("");
//console.log(c)
for(var i=0;i<c.length;i++)
{
  process.stdout.write(c[i]);
  if(c[i]=="a")
  {
    console.log();
  }
}


