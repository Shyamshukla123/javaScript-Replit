var marks = [21,22,32,25];
for(var i=0;i<marks.length/2;i++)
{
  var temp = marks[i];
  marks[i]=marks[marks.length-1-i];
  marks[marks.length-1-i] = temp;
}
console.log(marks);