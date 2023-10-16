export function stringSolution4(str){
//Основная функция, в которой осуществляется решение задачи на строки
const splitArr=[" ", ",", ".", ":"];
let workStr=str;
for(let i=0;i<splitArr;++i){
    workStr=workStr.replace(splitArr,"");
}

let words=workStr.split(" ");

return words.reduce((word,currWord)=>word.length>currWord.length?word:currWord,"");
}