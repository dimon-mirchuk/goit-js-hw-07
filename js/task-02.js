// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS есть массив строк.

// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];
// Напиши скрипт, который для каждого элемента массива ingredients
// создаст отдельный li, после чего вставит все li за одну операцию в список
// ul.ingredients.Для создания DOM - узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListRef = document.querySelector("ul#ingredients")

// const addEl = ingredients => {
//     let newElements = []
//         ingredients.forEach(item => {
//         const listItem = document.createElement('li');
//         listItem.textContent = item;
//         newElements.push(listItem);
//     });
//     return ingredientsListRef.append(...newElements);
// }
const addEl = ingredients.map((ingredient) => {
    const createEl = document.createElement('li')
    createEl.textContent = ingredient
    return createEl
}
)
 
ingredientsListRef.append(...addEl);

