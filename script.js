//Добавить к таблице форму с кнопкой.
let form = document.createElement("form");
form.setAttribute("onsubmit", "return false");

//Выбрать цвет
const colorName = document.createElement("label");
colorName.setAttribute("for", "color");
colorName.innerHTML = "Выберите цвет";

const color = document.createElement("input");
color.setAttribute("type", "color");
color.setAttribute("id", "color");
color.setAttribute("value", "#fc0303");

//Выбрать ячейку
const inputName = document.createElement("label");
inputName.innerHTML = "Выберите ячейку(1-12)";

const input = document.createElement("input");
input.setAttribute("type", "number");
input.setAttribute("min", "1");
input.setAttribute("max", "12");
input.setAttribute("name", "cell");
input.setAttribute("id", "cell");
input.setAttribute("value", "1");

// Кнопка события
const go = document.createElement("input");
go.setAttribute("type", "submit");
go.setAttribute("value", "GO");
go.setAttribute("onclick", "changeColor()");

form.appendChild(colorName);
form.appendChild(color);
form.appendChild(inputName);
form.appendChild(input);
form.appendChild(go);

document.getElementsByTagName("body")[0].appendChild(form);

//Массив ячеек
const cellsArray = [...document.querySelectorAll("td")];
//Создать функцию которая меняет цвета ячеек

function changeColor(a) {
  const newColor = document.getElementById("color").value;
  const newCell = document.getElementById("cell").value - 1;

  //Выбранная ячейка закрашивается в белый цвет, как фон
  cellsArray[newCell].style.backgroundColor = "white";
  // остальные в цвет, который выбрал пользователь.
  for (let i = 0; i < 12; i++) {
    if (i != newCell) {
      cellsArray[i].style.background = newColor;
    }
  }
}
