const button = document.querySelector("button");
const body = document.querySelector("body");
const color = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];
body.style.background = 'violet';

button.addEventListener('click', changeB);

function changeB() {
	const colorIndex = Math.floor(Math.random() * color.length);
	body.style.background = color[colorIndex];
}
