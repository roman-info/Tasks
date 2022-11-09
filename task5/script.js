 document.querySelector('button').addEventListener('click', myClick);

function myClick(){
	let textContent = document.querySelector('input').value;
	console.log(textContent);
	document.getElementById('duplicateField').innerHTML = textContent;
}

