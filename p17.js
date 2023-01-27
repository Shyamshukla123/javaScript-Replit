 var num = 12345;
 var sum = 0;
 while(num>0)
 {
   sum = ((sum*10)+(num%10));
   num = parseInt(num/10);
 }
 console.log(sum);