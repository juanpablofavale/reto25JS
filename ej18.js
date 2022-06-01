function fixFiles(files) {
    // ¡No olvides compartir tu solución en redes!
    var arch = []
    var k = []

    for (let element of files){
        if (arch.includes(element)){
            if (k[element] !== NaN && k[element] !== undefined){
                k[element] += 1
            }else{
                k[element] = 1
            }
            const nom = element + "(" + k[element] + ")"
            arch.push(nom)
        }else{
            arch.push(element)
        }
    }
    console.log(arch)
    return arch
}

const files = ['photo', 'postcard', 'photo', 'photo', 'video']
fixFiles(files) // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']

const files2 = ['file', 'file', 'file', 'game', 'game']
fixFiles(files2) // ['file', 'file(1)', 'file(2)', 'game', 'game(1)']

// ojo que los elfos ya tenían archivos con (1)... ¡y pueden estar repetidos!
const files3 = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)']
fixFiles(files3) // ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']