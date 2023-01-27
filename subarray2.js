var arr = [1, 2, 3, 4, 5];
arr = arr.join("");
console.log(arr)
var arr1 = [];
for (var i = 0; i < arr.length; i++) {
        for (var j = i; j < arr.length; j++) {
                arr1.push(arr.substring(i, j + 1))
        }
}
console.log(arr1)