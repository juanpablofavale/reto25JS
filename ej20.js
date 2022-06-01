function pangram(letter) {
    // ¡No olvides compartir tu solución en redes!
    var abc = "abcdefghijklmnñopqrstuvwxyz"

    for (let letra of abc){
        if(!letter.toLowerCase().includes(letra)){
            return false
        }
    }

    return true
}

console.log(`a == á ${"o" == "ó"}`)
console.log(pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho')) // true
console.log(pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!')) // true

console.log(pangram('Esto es una frase larga pero no tiene todas las letras del abecedario')) // false
console.log(pangram('De la a a la z, nos faltan letras')) // false