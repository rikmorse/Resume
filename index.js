var today = new Date();
var hours = today.getHours();
var greeting;
const personName = 'Richard';

if (hours < 12) {
    greeting = "Good morning!";
}
else if (hours < 18) {
    greeting = "Good afternoon!";
}
else {
    greeting = "Good evening!";
}
console.log(greeting);

document.getElementById("greeting").innerHTML = greeting;
;
document.getElementById("nameInput").addEventListener("input", function() {
    const name = document.getElementById("nameInput").value;
    document.getElementById("greeting").innerHTML = greeting + " " + name + ":)";
}
);