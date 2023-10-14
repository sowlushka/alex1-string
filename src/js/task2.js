import { ShowSolutionResult, createTaskHTML } from "./common";
const id="task2";
const taskNum=Number(id.replace("task",""));

createTaskHTML({
        taskNum: taskNum,
        taskText: "Пользователь вводит строку. Нужно сформировать и вывести массив из всех чисел в этой строке.",
        inputText: "Введите текст с числами"
    });

const button=document.querySelector(`#${id} + button`);
button.onclick=(e)=>{
    let str=document.getElementById(id).value;
    ShowSolutionResult(id, stringSolution(str));
}





function stringSolution(str){
//Основная функция, в которой осуществляется решение задачи на строки

let arrOfNum=[];
    let doParse;
    do{
        doParse=false;
        let numPosition=-1;
        let numPositionEnd=-1;
        for(let i=0;i<str.length;++i){
            if(isCharNumber(str[i])){
            //Найдена цифра
                numPosition=i;
                numPositionEnd=i;
                let commaCount=0;
                for(let j=numPositionEnd+1;j<str.length;++j){
                //Ищем окончание числового значения в цикле,
                //так как могут быть десятичные нули, которые будут отброшены стандартной функцией
                    if(!isCharNumber(str[j]) && str[j]!=".") break;
                    if (str[j]==".")++commaCount;
                    if(commaCount>1)break;
                    numPositionEnd=j;
                }
                break;
            }
        }
        
        if(numPosition>=0){
            let num=parseFloat(str.slice(numPosition));
            doParse=true;
            arrOfNum.push(num);
            str=str.slice(numPositionEnd+1);
        }
    }while(doParse)

return "["+arrOfNum.join(", ")+"]";
}

function isCharNumber(number){
    return number.charCodeAt(0)>0x2F && number.charCodeAt(0)<0x3A;
}