// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const inputRef = document.querySelector("#controls input");
const renderBtn = document.querySelector(`[data-action="render"]`);
const destroyBtn = document.querySelector(`[data-action="destroy"]`);
const containerBox = document.querySelector("#boxes");

renderBtn.addEventListener("click", getAmount);
destroyBtn.addEventListener("click", destroyBoxes);

function getAmount() {
  const amount = inputRef.value;
  createBoxes(amount);
}
function random() {
  return Math.floor(Math.random() * 256);
}
function destroyBoxes() {
  containerBox.innerHTML = "";
}

function createBoxes(amount) {

  for (let i = 0; i < amount; i += 1) {
    let boxSize = 30 + i * 10;
    let div = document.createElement("div");
    div.style.cssText = `width: ${boxSize}px; height: ${boxSize}px; background-color: rgb(${random()},${random()},${random()})`;
    boxes.append(div);
  }
}


