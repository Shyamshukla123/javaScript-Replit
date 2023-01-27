var arr=[3,7,8,0,5]
var size =5;

  for(var i=0;i<size;i++)
    {
        var n = [];
        //var s = 'No';
        if(arr[i]==42)
        {
            var s = 'Yes';
            n.push(s)
            break;
        }
        else
        {
           s ='No';
           n.push(s);
        }
    }  
console.log(n.join())
