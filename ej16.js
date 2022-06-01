function decodeNumbers(symbols) {
    // ¡No olvides compartir tu solución en redes!
    var numero = 0;
    var nAnt = 0;
    var i = symbols.length - 1;
    calcular(symbols, nAnt, i);
    console.log(symbols + " - " + numero)
    return numero
    
    function calcular(symbols, nAnt, i){
        
        const valor = traducir(symbols[i])
        
        if (valor >= nAnt){
            numero += valor
        }else{
            numero -= valor
        }
        
        if (i > 0){
            i--;
        }else{
            return false
        }

        calcular(symbols, valor, i)
    }
    
    function traducir(caracter){
        var num = 0;
        switch(caracter){
            case "!":
                num = 100
                break;
                case ";":
                    num = 50
                    break;
                    case ":":
                        num = 10
                        break;
                        case ",":
                            num = 5
                            break;
                            case ".":
                                num = 1
                                break;
                                default:
                                    num = NaN
                                    break;
                                }
                                return num;
                            }
                            
                            
                            /*var numero = 0;
                            var ultimoNumero = 0;


                            
                            for (let i = symbols.length - 1 ; i >= 0 ; i--){
                                let s = symbols[i]
                                if (s === "!"){
                                    numero += 100
                                    ultimoNumero = 100
                                }else if (s === ";"){
                                    if (ultimoNumero > 50){
                                        numero -= 50
                                    }else{
                                        numero += 50
                                    }
                                    ultimoNumero = 50
                                }else if (s === ":"){
                                    if (ultimoNumero > 10){
                                        numero -= 10
                                    }else{
                                        numero += 10
                                    }
                                    ultimoNumero = 10
                                }else if (s === ","){
                                    if (ultimoNumero > 5){
                                        numero -= 5
                                    }else{
                                        numero += 5
                                    }
                                    ultimoNumero = 5
                                }else if (s === "."){
                                    if (ultimoNumero > 1){
                                        numero -= 1
                                    }else{
                                        numero += 1
            }
            ultimoNumero = 1
        }else{
            numero = NaN
        }
        
    }
    return numero*/
}

/*
Símbolo       Valor
.             1
,             5
:             10
;             50
!             100
*/

decodeNumbers('...') // 3
decodeNumbers('.,') // 4 (5 - 1)
decodeNumbers(',.') // 6 (5 + 1)
decodeNumbers(',...') // 8 (5 + 3)
decodeNumbers('.........!') // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
decodeNumbers('.;') // 49 (50 - 1)
decodeNumbers('..,') // 5 (-1 + 1 + 5)
decodeNumbers('..,!') // 95 (1 - 1 - 5 + 100)
decodeNumbers('.;!') // 49 (-1 -50 + 100)
decodeNumbers('!!!') // 300
decodeNumbers(';!') // 50
decodeNumbers(';.W') // NaN