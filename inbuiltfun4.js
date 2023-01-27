
function split(input)
{
  var arr =[];
  var str ="";
  
  for(var i=0;i<input.length;i++)
  {
    //str = str + input[i];
    if(input[i]==" ")
    {
     arr.push(str);
     str="";
    }
    else
    {
    str = str+input[i]
    }
  }
  
  arr.push(str)
  
  return arr;

}

var name ="shyam shukla";
console.log(split(name))
//console.log(a)
