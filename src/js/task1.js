export const button1=document.querySelector("#phone-1 + button");
button1.onclick=(e)=>{
    let inputPhone=document.getElementById("phone-1").value;
    //Избавляемя от знаков -,(,)
    inputPhone=inputPhone.replaceAll("-","").replaceAll("(","").replaceAll(")","");
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
    document.querySelector("#phone-1 ~ .solution-result").innerText=standardPhone;

}