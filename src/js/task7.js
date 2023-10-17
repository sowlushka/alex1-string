export function stringSolution7(str){

   return str.split(" ").map(
        word=>word.length>0?word[0].toUpperCase()+word.slice(1):""
    ).join(" ");
}