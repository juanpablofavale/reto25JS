function createXmasTree(height) {
    // ¡Y no olvides también poner los turrones!

    if (height > 100){
        console.log("No se puede crear un pino mas grande que 100 de altura");
        height = 100;
    };

    let arbol = "";
    let ancho = height * 2;
    let asterisco = "";
    let guion = "";

    if (ancho%2 == 0){ancho -= 1;};
    
    for (let i = ancho; i >= 0; i=i-2){
        asterisco = "";
        guion = "";

        for (let j = i; j > 0; j--){
            asterisco = asterisco + "*";
        }

        for (let k = ((ancho-i)/2); k > 0; k--){
            guion = guion + "_";
        }

        arbol = guion + asterisco + guion + "\n" + arbol;
        if (asterisco.length == 1){
            arbol = arbol + guion + "#" + guion + "\n";
            arbol = arbol + guion + "#" + guion;
        }

    }


    return arbol;
}

console.log(createXmasTree(40));