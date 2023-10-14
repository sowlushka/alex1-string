import { ShowSolutionResult, createTaskHTML } from "..";
const id="task4";
const taskNum=Number(id.replace("task",""));

createTaskHTML({
        taskNum: taskNum,
        taskText: "Выведете самое длинное слово в предложении (слова разбиты пробелами).",
        inputText: "Напишите предложение"
    });

const button=document.querySelector(`#${id} + button`);
button.onclick=(e)=>{
    let str=document.getElementById(id).value;
    ShowSolutionResult(id, stringSolution(str));
}

function stringSolution(str){
//Основная функция, в которой осуществляется решение задачи на строки
const splitArr=[" ", ",", ".", ":"];
let workStr=str;
for(let i=0;i<splitArr;++i){
    workStr=workStr.replace(splitArr,"");
}

let words=workStr.split(" ");

return words.reduce((word,currWord)=>word.length>currWord.length?word:currWord,"");
}