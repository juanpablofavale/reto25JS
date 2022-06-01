function isValid(letter) {
    // ¡No dejes que el Grinch gane!
    
    if (letter.search(/\{|\[|\}|\]/g) == -1){
        const parAbre = letter.indexOf("(");
        const parCierra = letter.indexOf(")");

        if (parCierra != -1){
            const contenido = letter.slice(parAbre + 1, parCierra);
            console.log(contenido);
            if (contenido.includes("(") != true){
                return contenido.trim() != "";
            }else{
                return false;
            }
        }else{
            return false;
        }
    }else{
        return false;
    };
};

const carta1="bici coche (balón) bici coche peluche";
const carta2="(muñeca) consola bici";
const carta3="bici coche (balón bici coche";
const carta4="peluche (bici [coche) bici coche balón";
const carta5="(peluche {) bici";
const carta6="() bici";
const carta7="(()) bici";


console.log(isValid(carta1));
console.log(isValid(carta2));
console.log(isValid(carta3));
console.log(isValid(carta4));
console.log(isValid(carta5));
console.log(isValid(carta6));
console.log(isValid(carta7));
