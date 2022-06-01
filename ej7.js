function contains(store, product) {
    // ¡Y no olvides compartir tu solución en redes!
    var valores = []
    const keysa = Object.keys(store)
    for (let i = 0; i < keysa.length; i++){
        if (typeof (store[keysa[i]]) === 'string'){
            valores=[...valores, ...[store[keysa[i]]]]
        }else{
            const keysb = Object.keys(store[keysa[i]])
            for (let j = 0; j < keysb.length; j++){
                if (typeof (store[keysa[i]][keysb[j]]) === 'string'){
                    valores=[...valores, ...[store[keysa[i]][keysb[j]]]]
                }else{
                    const keysc = Object.keys(store[keysa[i]][keysb[j]])
                    for (let k = 0; k < keysc.length; k++){
                        if (typeof (store[keysa[i]][keysb[j]][keysc[k]]) === 'string'){
                            valores=[...valores, ...[store[keysa[i]][keysb[j]][keysc[k]]]]
                        }else{
                            const keysd = Object.keys(store[keysa[i]][keysb[j]][keysc[k]])
                            for (let l = 0; l < keysd.length; l++){
                                if (typeof (store[keysa[i]][keysb[j]][keysc[k][keysd[l]]]) === 'string'){
                                    valores=[...valores, ...[store[keysa[i]][keysb[j]][keysc[k]][keysd[l]]]]
                                }else{
                                    const keyse = Object.keys(store[keysa[i]][keysb[j]][keysc[k]][keysd[l]])
                                    for (let m = 0; m < keyse.length; m++){
                                        if (typeof (store[keysa[i]][keysb[j]][keysc[k]][keysd[l]][keyse[m]]) === 'string'){
                                            valores=[...valores, ...[store[keysa[i]][keysb[j]][keysc[k]][keysd[l]][keyse[m]]]]
                                        }else{
                                            const keysf = Object.keys(store[keysa[i]][keysb[j]][keysc[k]][keysd[l]][keyse[m]])
                                            for (let n = 0; n < keysf.length; n++){
                                                valores=[...valores, ...keysf[n]]
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

//    console.log(valores)

    for (let i = 0 ; i < valores.length ; i++){
        if (valores[i] === product){
            return true;
        }
    }
    
    return false;
    
}

console.log("\n\n")

const almacen = {
    'estanteria1': {
      'cajon1': {
        'producto1': 'coca-cola',
        'producto2': 'fanta',
        'producto3': 'sprite'
      }
    },
    'estanteria2': {
      'cajon1': 'vacio',
      'cajon2': {
        'producto1': 'pantalones',
        'producto2': 'camiseta' // <- ¡Está aquí!
      }
    }
  }
              
  console.log(contains(almacen, 'camiseta')) // true
  
  const otroAlmacen = {
    'baul': {
      'fondo': {
        'objeto': 'cd-rom',
        'otro-objeto': 'disquette',
        'otra-cosa': 'mando'
      }
    }
  }
    
  console.log(contains(otroAlmacen, 'gameboy')) // false

 const toma = {
    "b": {
        "c": {
            "d": {
                "e": "f"
            }
        }
    }
}

console.log(contains(toma, 'e')) // false
