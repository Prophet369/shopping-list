var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deleteButton = document.getElementsByClassName("delete");
var items = document.querySelectorAll("li"); 

for (i = 0; i < deleteButton.length; i++) {
	deleteButton[i].addEventListener("click", removeParent, false);
}

function removeParent(e) {
	e.target.removeEventListener("click", removeParent, false);
	e.target.parentNode.remove();
}

for (i = 0; i < items.length; i++) {
	items[i].addEventListener("click", changeClass, false);
}

function changeClass() {
	this.classList.toggle("done");
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var btn = document.createElement("button");
	btn.innerHTML = "Delete";
	btn.onclick = removeParent;

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.addEventListener("click", changeClass);
	li.innerHTML = li.innerHTML + " ";
	li.appendChild(btn);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);