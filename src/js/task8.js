const accessedSymbols=["0","1","2","3","4","5","6","7","8","9",
".", "(",")","=","+","-","*","/","^"];


export function stringSolution8(str){
  
    //Защита кода от несанкционированных инъекций.
    //Проверяем выражение на разрешенные знаки

    if(!isCharsAccessed(str)){    //В тексте попались неразрешенные символы
            return '<font color="red">Ошибка. В выражении неразрешенные символы</font>';
    }else if(!str.includes("=")){
            return '<font color="red">Ошибка. В выражении не найден знак равенства</font>';
    }else if(str.split("=").length>2){
        return '<font color="red">Ошибка. В выражении больше одного знака равенства</font';
    }

    let newStr=str.replaceAll("=","==").replaceAll("^","**");
    return Boolean(eval(newStr)).toString();

}

export function isCharsAccessed(str, accessedCharsArray=accessedSymbols){

    return str.split("").every(symbol=>accessedCharsArray.
        findIndex(accSymbol=>accSymbol===symbol)!=-1);
}