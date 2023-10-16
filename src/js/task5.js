export function stringSolution5(str){
//Задача на слова-перевёртыши


return str.toLowerCase().split("").every((el,index,arr)=>{
        return el===arr[arr.length-index-1]
    })?"true":"false";
}