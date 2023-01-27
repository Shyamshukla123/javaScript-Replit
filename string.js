var str = "le";
if (str.length == 0 || str.length < 3 || str.length > 20) {
        console.log("Invalid Input");
}
for (var i = 0; i < str.length; i++) {
        var newStr = "";
        for (var j = i; j < str.length; j++) {
                newStr = newStr + str[j];
                console.log(newStr)
        }
}