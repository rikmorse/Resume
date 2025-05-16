document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
  });
  
  var about = "I was born and raised in Reno, NV. I am a junior software developer with a passion for learning and growing in the field of technology. I have experience in various programming languages and frameworks, and I am always eager to take on new challenges. In my free time, I enjoy hiking, reading, and spending time with my family and friends.";
  document.getElementById("about").innerHTML = about; 

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

document.getElementById("nameInput").addEventListener("input", function() {
    const name = document.getElementById("nameInput").value;
    document.getElementById("greeting").innerHTML = greeting + " " + name + ":)";
}
);


