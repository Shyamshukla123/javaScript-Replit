var greet = document.createElement("p");
greet.innerHTML = `Hello ${name}`;
var name = "Ninja";
document.body.append(greet);
document.body.append(`Nice to meet you, ${name}!`);