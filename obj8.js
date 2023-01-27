var n=5;
var k=10;
var data = {};
for(var i=0;i<n;i++)
{
  var char =i;
  {
    data[char+1]=k+i;
  }
}

for( z in data)
{
  console.log(z+"-"+data[z]);
}