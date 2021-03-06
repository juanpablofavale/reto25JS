function checkSledJump(heights) {
    // ¡No olvides compartir tu solución en redes!
    
    var bandera = false

    for (let i = 0; i < heights.length; i++){
        if (heights[i] > heights[i + 1] && bandera === false){
            bandera = true
        }else if (heights[i] < heights[i + 1] && bandera === true){
            bandera = false
            break;
        }else if (heights[i] === heights[i + 1]){
            bandera=false
            break;
        }
    }

    return bandera
}

//checkSledJump([1, 2, 3, 2, 1]) // true: sube y baja de forma estricta
//checkSledJump([0, 1, 0]) // -> true: sube y baja de forma estricta
//checkSledJump([0, 3, 2, 1]) // -> true: sube y baja de forma estricta
//checkSledJump([0, 1000, 1]) // -> true: sube y baja de forma estricta

checkSledJump([2, 4, 4, 6, 2]) // false: no sube de forma estricta
//checkSledJump([1, 2, 3]) // false: sólo sube
//checkSledJump([1, 2, 3, 2, 1, 2, 3]) // false: sube y baja y sube... ¡no vale!