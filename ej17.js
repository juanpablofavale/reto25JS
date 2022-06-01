function countPackages(carriers, carrierID) {
    // ¡No olvides compartir tu solución en redes!
    var res = 0;
    var bandera = false
    var id = carrierID
    obSig(carriers, id)

    function obSig(anterior, id){
        for (siguiente of anterior){
            if (typeof siguiente === 'object' && siguiente != ""){
                if (id.includes(siguiente[0])){
                    bandera = true
                    id = id.concat(siguiente[2])
                }else{
                    bandera=false
                }
                obSig(siguiente, id)
            }else if (typeof siguiente === "number" && bandera === true){
                res += siguiente
            }
        }
    }

    return res;
}

const carriers = [
  ['dapelu', 5, ['midu', 'jelowing']],
  ['midu', 2, []],
  ['jelowing', 2, []]
]

countPackages(carriers, 'dapelu') // 9
// 5 de dapelu, 2 de midu y 2 de jelowing = 9

const carriers2 = [
  ['lolivier', 8, ['camila', 'jesuspoleo']],
  ['camila', 5, ['sergiomartinez', 'conchaasensio']],
  ['jesuspoleo', 4, []],
  ['sergiomartinez', 4, []],
  ['conchaasensio', 3, ['facundocapua', 'faviola']],
  ['facundocapua', 2, []],
  ['faviola', 1, []]
]

countPackages(carriers2, 'camila') // 15
// 5 de camila, 4 de sergiomartinez, 3 de conchaasensio, 2 de facundocapua y 1 de faviola = 15