//variables
const addBtn = document.getElementById('addBtn');

//create "close" button and append it to each list item
const myNodeList = document.getElementsByTagName('li')

for(let i=0; i < myNodeList.length; i++) {
	const span = document.createElement('span');
	const txt = document.createTextNode('\u00D7');
	span.className = 'close';	
	span.appendChild(txt);	
	myNodeList[i].appendChild(span);
}

//Click on a close button to remove element from the list
const close = document.getElementsByClassName('close');
const closingFunc = function() {
	let div = this.parentElement;
	div.style.display = 'none';
};

for (let i=0;i<close.length; i++) {
	close[i].onclick = closingFunc;
	
};
//check elements
let listElement = document.getElementsByTagName('li');

const checkedFunction = function(event) {
	event.target.className = 'checked';
};

for (let i=0;i < listElement.length; i++) {
	listElement[i].onclick = checkedFunction;
};

//create a new list element
const newElement = function() {
	let li = document.createElement('li');
	let inputValue = document.getElementById('myInput').value;
	let t = document.createTextNode(inputValue);
	li.appendChild(t);


	if (inputValue === '') {
		alert('You must write something!')
	} else {
		document.getElementById('myUL').appendChild(li)
	};                                                                       

	document.getElementById('myInput').value = '';
};


//add button action
addBtn.onclick = newElement;

