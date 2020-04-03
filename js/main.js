console.log("HELLO WORLD!");

var navButton = document.getElementById('navButton');
var menu = document.getElementById("menu");

navButton.addEventListener('click' , toggleMenu);

function toggleMenu() {
	menu.classList.toggle("displayMenu");
	navButton.classList.toggle("fa-times");

}
