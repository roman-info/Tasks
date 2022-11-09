//Console
const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
	alert('Служит для вывода информации в консоль');
});

//Alert
const alertConst = document.querySelector('#alert');

alertConst.addEventListener('click', () => {
	alert('Предназначена для вывода в браузере предупреждающего модального диалогового окна с некоторым сообщением и кнопкой «ОК». При его появлении дальнейшее выполнение кода страницы прекращается до тех пор, пока пользователь не закроет это окно');
});

//Prompt
const promptConst = document.querySelector('#prompt');

promptConst.addEventListener('click', () => {
	alert('Предназначен для вывода диалогового окна с сообщением, текстовым полем для ввода данных и кнопками «ОК» и «Отмена». Это окно предназначено для запроса данных, которые пользователю нужно ввести в текстовое поле');
});