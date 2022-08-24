// Oppgave 1

let removeBtn = document.getElementById("remove-btn");

const eventHandler = () => {
  document.getElementById("remove").style.display = "none";
};

removeBtn.addEventListener("click", eventHandler);

// document.getElementById("remove").style.display = "none";

// Oppgave 2
let changeBtn = document.getElementById("change-btn");
const changeTxt = document.getElementById("change");
const changeHandler = () => {
  changeTxt.innerHTML = "Byttet ut teksten";
};

changeBtn.addEventListener("click", changeHandler);

// Oppgave 3
const inputTxt = document.getElementById("input-text");
const inputField = document.getElementById("input");
inputField.addEventListener("keyup", () => {
  inputTxt.innerHTML = inputField.value;
});

// Oppgave 4
const myList = ["item one", "item two", "item three"];
const btn = document.getElementById("write-list");

const eventHandler1 = () => {
  document.getElementById("ul").append(myList);
};

btn.addEventListener("click", eventHandler1);

// Oppgave 5
const selectValue = document.getElementById("select");
const textWrote = document.getElementById("text");
const createText = document.getElementById("create");


const createNew = () => {
  const tag = document.createElement(selectValue.value);
  let text = document.createTextNode(textWrote.value);
  tag.appendChild(text);
  let element = document.getElementById("placeholder");
  element.appendChild(tag);
};

createText.addEventListener("click", createNew);

// Oppgave 6
const removeBtn1 = document.getElementById("remove-li");
const liList = document.getElementById("list");

const removeList = () => {
  liList.removeChild(liList.lastElementChild);
};

removeBtn1.addEventListener("click", removeList);
// Oppgave 7
const nameInput = document.getElementById("name");

nameInput.addEventListener("keyup", () => {
  if (nameInput.value.length > 4) {
    document.getElementById("order").setAttribute("disabled", "");
  } else {
    document.getElementById("order").removeAttribute("disabled");
  }
});

// Oppgave 8

const ulList = document.getElementById('children');
const changesBtn = document.getElementById('color');
const ulChildren = document.querySelectorAll('li');

const changeColor = () => {
    Array.from(ulChildren).forEach((li, index) => {
        if ((index + 1) % 2 === 0) {
            li.style = "border: 2px solid pink;";
        } else {
            li.style = "border: 2px solid green;";
        }
    });
};
changesBtn.addEventListener("click", changeColor);
