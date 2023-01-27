function uppercase(name)
{
 var arr1 =[];
 for(var i=0;i<name.length;i++)
 {
   var str = name[i].toUpperCase();
   arr1.push(str);
 }
 return arr1;
}

var arr =["ma","sai","sch","ool"];
console.log(uppercase(arr));