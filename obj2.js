var items = ["a","b","c","b","d","a"];
var data = {};
for(var i=0;i<items.length;i++)
{
  var item = items[i];
  data[item]="zx";
  console.log(data);
}
//console.log(Object.values(data))
//console.log(Object.keys(data));
