export function trim(str){
//Задача на слова-перевёртыши

let words=str.split(" ");
let result=words.filter(word=>word.length>0).join("\x5F");
let html=`
        <div><font color="red">input:</font> ${str.replaceAll(" ","\x5F")}</div>
        <div><font color="red">out:</font> ${result}</div>
`;
return html;
}