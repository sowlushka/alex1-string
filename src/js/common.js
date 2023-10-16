import { tasks } from "./config";

tasks.forEach(createTaskHTML);




export function createTaskHTML(objTask){
//В HTML добавляется блок с заданием номер taskNum и текстом задания taskText
//Приглашающий текст для пользователя ввести данные передаётся в inputText
objTask.inputText??="Введите строку:";
objTask.inputType??="text";

const htmlID="task"+objTask.id;
const HTML=`
<div class="task">
    <h2>Задание ${objTask.id}</h2>
    <div class="task-description">
      ${objTask.task}
    </div>
    <form class="solution">
      <div class="solution-inputs-container">
        <label for="${htmlID}">${objTask.inputText}</label>
        <input id="${htmlID}" type="${objTask.inputType}">
        <button type="button">ОК</button>
        <div class="solution-result"></div>
      </div>
    </form>
  </div>
`;
document.body.insertAdjacentHTML("beforeend",HTML);

const button=document.querySelector(`#${htmlID} + button`);
button.onclick=(e)=>{
    let str=document.getElementById(htmlID).value;
    ShowSolutionResult(htmlID, objTask.solution(str));
  }
}


function ShowSolutionResult(id, message){
//Функция отображает ответ решения message в блоке с инпутом id
    document.querySelector(`#${id} ~ .solution-result`).innerHTML=message;
}