import { ShowSolutionResult, createTaskHTML } from "./common";
const id="task1";
const taskNum=Number(id.replace("task",""));

createTaskHTML({
        taskNum: taskNum,
        taskText: "Спросите у пользователя телефонный номер и выведете его в нормализованном виде.",
        inputText: "Введите номер телефона:",
        inputType: "tel"
    });


const button=document.querySelector(`#${id} + button`);
button.onclick=(e)=>{
    let str=document.getElementById(id).value;
    ShowSolutionResult(id, stringSolution(str));
}


function stringSolution(str){
    let inputPhone=str.replaceAll("-","").replaceAll("(","").replaceAll(")","");//Удаляем, так как могут быть 8(10), 8-10- с выходом на международную линию
    let standardPhone="";
    for(let i=0;i<inputPhone.length;++i){
        
        let char=inputPhone[i];
        if(i==0){
            if(inputPhone.slice(0,1)==="00"){
            //00 в начале номера - аналог плюса в Турции
                ++i;
                continue;
            }else if(inputPhone.slice(0,3)==="810"){
            //Выход на международный номер
                i=2;
                continue;
            }else if(char==="8"){
                char="7";
            }

        }
        /*Удаляем нецифровые символы */
        let charCode=char.charCodeAt(0);
        standardPhone+=charCode>0x2F && charCode<0x3A?char:"";
    }
    return "+"+standardPhone;
}