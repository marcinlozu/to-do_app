//create variables
const addBtn = document.getElementById('addBtn');
const listElement = document.getElementsByTagName('li');
const ul = document.getElementById('myUL');

//'close' button

const closeFunction = function() {
	/* body... */

	for(let i=0; i< listElement.length; i++) {
		let span = document.createElement('span');
		let txt = document.createTextNode('x');
		span.className = 'close';
		span.appendChild(txt);

		listElement[i].appendChild(span)

	};
};

closeFunction();

const close = document.getElementsByClassName('close');

//remove elements
const removeFunction = function () {
	for(let i=0; i< close.length; i++) {
		close[i].onclick = function() {
			this.parentElement.remove();
		}
	};
};
removeFunction();

//check and uncheck elements
const checkElementFunction = function () {

	for (let i=0; i< listElement.length; i++) {
		listElement[i].onclick = function(event) {
			if(this.className === 'checked'){
				event.target.classList.remove('checked')
			} else {
				this.classList.add('checked')
			}
		}
	};
};
checkElementFunction();

//create elements
const newElement = function() {
	let li = document.createElement('li');
	let inputValue = document.getElementById('myInput').value;
	let text = document.createTextNode(inputValue);
	li.appendChild(text);

	if (inputValue === '') {
			alert('You must write sth')
		} else {
			ul.appendChild(li);
		};
	
	document.getElementById('myInput').value = '';

	closeFunction();

	removeFunction();

	checkElementFunction();

};
//
addBtn.onclick = newElement
