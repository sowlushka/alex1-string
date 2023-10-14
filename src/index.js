import './index.scss';
import "./js/task1.js";
import "./js/task2.js";
import "./js/task3.js";
import "./js/task4.js";


export function createTaskHTML({taskNum, taskText, inputText="Введите текст:", inputType="text"}){
//В HTML добавляется блок с заданием номер taskNum и текстом задания taskText
//Приглашающий текст для пользователя ввести данные передаётся в inputText
const HTML=`
<div class="task">
    <h2>Задание ${taskNum}</h2>
    ${taskText}
    <form class="solution">
      <div class="solution-inputs-container">
        <label for="task${taskNum}">${inputText}</label>
        <input id="task${taskNum}" type="${inputType}">
        <button type="button">ОК</button>
        <div class="solution-result"></div>
      </div>
    </form>
  </div>
`;
document.body.insertAdjacentHTML("beforeend",HTML);
}


export function ShowSolutionResult(id, message){
//Функция отображает ответ решения message в блоке с инпутом id
    document.querySelector(`#${id} ~ .solution-result`).innerHTML=message;
}