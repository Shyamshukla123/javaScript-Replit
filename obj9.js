var N=20;
var data={};
var arr =["!","@","#","$","%","^","&","*"];
for(var i=0;i<arr.length;i++)
{
  var char =arr[i];
  {
    data[char]=(N+(i*2));
  }
}

for(k in data)
{
  console.log(k+"-"+data[k]);
}