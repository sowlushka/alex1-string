import { ShowSolutionResult, createTaskHTML } from "./common";
const id="task3";
const taskNum=Number(id.replace("task",""));

createTaskHTML({
        taskNum: taskNum,
        taskText: "Подсчитайте количество строчных и прописных букв в строке. Считается, что в строке могут быть только английские буквы и пробелы.",
    });

const button=document.querySelector(`#${id} + button`);
button.onclick=(e)=>{
    let str=document.getElementById(id).value;
    ShowSolutionResult(id, stringSolution(str));
}

function stringSolution(str){
//Основная функция, в которой осуществляется решение задачи на строки

//Считаем символы, не поддающиеся преобразованиям
let constCase=0;
for(let i=0;i<str.length;++i){
    if(str[i].toLowerCase()===str[i].toUpperCase())++constCase;
}


let upperCase=calcEqualChars(str,str.toUpperCase())-constCase;
let lowerCase=calcEqualChars(str, str.toLowerCase())-constCase;
return `Прописных: ${upperCase} <br>Строчных: ${lowerCase}`;
}

function calcEqualChars(str1, str2){
    let equal=0;
    for(let i=0;i<str1.length;++i){
        if(str1[i]===str2[i])++equal;
    }
    return equal;
}