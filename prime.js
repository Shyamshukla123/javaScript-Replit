var a = 11;
for (var i = 2; i<a; i++)
if (a % i==0)
{
  console.log("not a prime number");
 break;
}
if (i==a)
{
  console.log("prime number");
}