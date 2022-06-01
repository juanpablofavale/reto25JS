function checkIsSameTree(treeA, treeB) {
    // ¡No olvides compartir tu solución en redes!
    //console.log(treeA)
    //console.log(treeA)
    var cSuma = [0,0]
    var cNull = [0,0]
    var suma = [0,0]
    var i = 0

    function nodo(treeA){
        const nodoS = Object.keys(treeA)
//        console.log(nodoS)
        for (let nodo1 of nodoS){
            console.log(treeA[nodo1])
            if (typeof treeA[nodo1] !== "object" || treeA[nodo1] === null){
                if (treeA[nodo1] === null){
                    cNull[i] += 1
                }else{
                    cSuma[i] += 1
                    suma[i] += treeA[nodo1]
                }
                //es un valor
                //return 0
            }else{
                nodo(treeA[nodo1])
            }
        }
    }

    nodo(treeA)
    i++
    nodo(treeB)
    if(suma[0] === suma[1] && cSuma[0] === cSuma[1] && cNull[0] === cNull[1]){
        console.log(true)
        return true
    }
    return false
}

const tree = {
    value: 1,
    left: { value: 2, left: null, right: null },
    right: { value: 3, left: null, right: null }
}

//checkIsSameTree(tree, tree) // true
  
const tree2 = {
    value: 1,
    left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
    right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
}

//checkIsSameTree(tree, tree2) // false
checkIsSameTree(tree2, tree2) // true