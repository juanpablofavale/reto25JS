function missingReindeer(ids) {
    // ¡No olvides compartir tu solución en redes!
    ids.sort(function (a,b){return a-b})
    for (let i = 0; i<100 ; i++){
        if (i !== ids[i]){
            return i
        }
    }
    return false
}

missingReindeer([0, 2, 3]) // -> 1
missingReindeer([5, 6, 1, 2, 3, 7, 0]) // -> 4
missingReindeer([0, 1]) // -> 2 (¡es el último el que falta!)
missingReindeer([3, 0, 1]) // -> 2
missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]) // -> 8
missingReindeer([0]) // -> 1 (¡es el último el que falta!)