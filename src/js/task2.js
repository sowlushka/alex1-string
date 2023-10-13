const button=document.querySelector("#task2 + button");
button.onclick=(e)=>{
    let str=document.getElementById("task2").value;
    let arrOfNum=[];
    let doParse;
    do{
        doParse=false;
        let numPosition=-1;
        let numPositionEnd=-1;
        for(let i=0;i<str.length;++i){
            if(!isNaN(parseInt(str[i]))){
            //Найдена цифра
                numPosition=i;
                numPositionEnd=i;
                let commaCount=0;
                for(j=numPositionEnd+1;j<str.length;++j){
                //Ищем окончание числового значения в цикле,
                //так как могут быть десятичные нули, которые будут отброшены стандартной функцией
                    if(isNaN(str[j]) && str[j]!=".") break;
                    if (str[j]==".")++commaCount;
                    if(commaCount>1)break;
                    numPositionEnd=j;
                }
                break;
            }
        }
        
        if(numPosition>=0){
            str=str.slice(numPosition);
            let num=parseFloat(str);
            doParse=true;
            arrOfNum.push(num);
            str=str.slice(numPositionEnd+1);
        }
    }while(doParse)
    document.querySelector("#task2 ~ .solution-result").innerText=`[${arrOfNum.join(", ")}]`;

}