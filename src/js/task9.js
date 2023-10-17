import { getNumbersArray } from "./task2";
import { isCharsAccessed } from "./task8";

const accessedSymbols=["0","1","2","3","4","5","6","7","8","9",
".","+","-","*","/"];

export function stringSolution9(str){
 
    if(!isCharsAccessed(str,accessedSymbols)){
         return '<font color="red">Ошибка. В выражении неразрешенные символы</font>';
    }

    //Первый аргумент 0 для работы с отрицательными числами.

    let dataArr;
    if(str[0]=="-"){
        dataArr=[0, ...getNumbersArray(str)];
    } else {
         dataArr=getNumbersArray(str);
    }

    let operators=str;
    for(let i=0;i<dataArr.length;++i){
        operators=operators.replace(dataArr[i],"");
    }
    let arrOperators=operators.split("");

    return dataArr.reduce((acc, curValue, indx)=>{
        let operation;
        switch (arrOperators[indx-1]){ 
            case "+":
                operation=acc+curValue;
                break;
            case "-":
                operation=acc-curValue;
                break;
            case "*":
                operation=acc*curValue;
                break;
            case "/":
                operation=acc/curValue;
        }
        return operation;
    });
}