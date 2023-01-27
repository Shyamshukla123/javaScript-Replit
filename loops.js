//even number between 1 to 100
var num = 100;
var cout =0;
for(var i = 1; i <= num; i++)
if(i%2==0)
{
  console.log(i);
  cout++; //cout indicates how many times even number cames
}
console.log("-----------------")
console.log(cout)