// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
//     подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const inputNameRef = document.querySelector("#name-input");
const outputNameRef = document.querySelector("#name-output");


const onInputChange = event => {
  outputNameRef.textContent = inputNameRef.value ? inputNameRef.value : 0;
};

inputNameRef.addEventListener('input', onInputChange);
