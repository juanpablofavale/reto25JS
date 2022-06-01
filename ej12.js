function getMinJump(obstacles) {
    // ¡No olvides compartir tu solución en redes!
    obstacles.sort(function(a,b){return a-b});
    var ultimo = obstacles.length - 1;
    var salto = 0;
    var bandera = false;

    console.log(obstacles)

    do{
        salto += 1;
        for (let i = salto; i <= obstacles[ultimo]; i += salto){
            console.log(obstacles.includes(i) + " " + i + " - salto: " + salto)
            if (obstacles.includes(i)){
                bandera = false;
                break;
            }else{
                bandera = true;
            }
        }
        if (bandera) break;
    }while((salto <= obstacles[ultimo]));
    return salto
}

//const obstacles = [5, 3, 6, 7, 9]
//console.log(getMinJump(obstacles)) // -> 4

// S es salto, X es obstáculo
/* Así quedaría la representación:
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
.  .  .  X  .  X  X  X  .  X  . 
S-----------S-----------S-------
*/

const obstacles = [2, 4, 6, 8, 10]
console.log(getMinJump(obstacles)) // -> 7

/* Así quedaría la representación:
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
.  .  X  .  X  .  X  .  X  .  X 
S--------------------S---------

// Longitudes de salto:
// 1 caería en el 2
// 2 caería en el 2
// 3 caería en el 6
// 4 caería en el 4
// 5 caería en el 10
// 6 caería en el 6
// 7 es el ideal!!! ✅

getMinJump([1, 2, 3, 5]) // -> 4
getMinJump([3, 7, 5]) // -> 2
getMinJump([9, 5, 1]) // -> 2
*/