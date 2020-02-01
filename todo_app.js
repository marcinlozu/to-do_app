//create variables
const addBtn = document.getElementById('addBtn');
const listElement = document.getElementsByTagName('li');
const ul = document.getElementById('myUL');

//'close' button
for(let i=0; i< listElement.length; i++) {
	let span = document.createElement('span');
	let txt = document.createTextNode('x');
	span.className = 'close';
	span.appendChild(txt);

	listElement[i].appendChild(span)

};


const close = document.getElementsByClassName('close');
//remove elements
for(let i=0; i< close.length; i++) {
	close[i].onclick = function() {
		this.parentElement.remove();
	}
};
//check and uncheck elements
for (let i=0; i< listElement.length; i++) {
	listElement[i].onclick = function(event) {
		if(this.className === 'checked'){
			event.target.classList.remove('checked')
		} else {
			this.classList.add('checked')
		}
	}
};
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
}
	document.getElementById('myInput').value = '';

//add close button
	let span = document.createElement('span');
	let txt = document.createTextNode('x');
	span.className = 'close';
	span.appendChild(txt);

	li.appendChild(span);

//remove element
for(let i=0; i< close.length; i++) {
	close[i].onclick = function() {
		this.parentElement.remove();
	}
};
//check / uncheck
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
//
addBtn.onclick = newElement
