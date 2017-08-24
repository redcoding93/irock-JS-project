/* The text is set to display with and alert box once the page loads.
Note: The code used was object.onload = function(){myScript}; where the object
is the window that is loaded and the function is the alert box. */

// The intro to the program with instructions for the user.
window.onload = function(){
  alert("Hi! I'm the irock! Are you ready to roll?" + " Click me to get started!")
}

// Prompts the user to input their name into the prompt window.
function clickRock(){
  var userName = prompt("Hi there!" + " Please enter your name so we can be friends!")

/* After taking the user's name as an input, it outputs the name and changes the image
to a happy face. */ 

if (userName){
  alert(userName + " is a cool name!" + " Let's have fun!");
  document.getElementById("irockimg").src="http://i.imgur.com/SDA58ib.png";
  }
}
