var marks = [20,30,25,25];
var total = 0;
var count = 0;
for(var i =0;i<marks.length;i++)
{
  if(marks[i]%2==0)
  {
   count++;
   total = total + marks[i];
  }
}
console.log(count);
console.log(total);
console.log(total/marks.length);