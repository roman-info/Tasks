const textContent = document.querySelector('a');
document.querySelector('a').addEventListener('click', myClick);

function myClick() {
	const promptConst = prompt('');
	textContent.innerHTML = promptConst;
}