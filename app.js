const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

async function getData(){

	const data = await fetch("https://api.github.com/users/SumanMarahatha7/repos");
	const response = await data.json();
	document.getElementById("project1").textContent = response[1].name;
	document.getElementById("project2").textContent = response[2].name;
	document.getElementById("project3").textContent = response[5].name;
	document.getElementById("project4").textContent = response[8].name;
	document.getElementById("project5").textContent = response[12].name;
	document.getElementById("project1url").href = response[1].html_url;
	document.getElementById("project2url").href = response[2].html_url;
	document.getElementById("project3url").href = response[5].html_url;
	document.getElementById("project4url").href = response[8].html_url;
	document.getElementById("project5url").href = response[12].html_url;
}

