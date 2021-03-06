function wrapGifts(gifts) {
    // Â¡No olvides compartir tu soluciÃ³n en redes!
    var asteriscos = ""
    if (gifts===null) return [];
    for (let j = 0; j < gifts[0].length; j++){
        asteriscos += "*"
    }
    var resultado = [asteriscos + "**"]

    for (let i = 0; i < gifts.length; i++){
        var emoji = "*" + gifts[i] + "*"
        resultado.push(emoji)
    }
    
    resultado.push(asteriscos + "**")
    return resultado
}

wrapGifts(["ð·", "â½ï¸"])
/* Resultado:
[ '****',
  '*ð·*',
  '*â½ï¸*',
  '****'
]
*/

wrapGifts(["ðð¸", "ð®ð§¸"])
/* Resultado:
[ '******',
  '*ðð¸*',
  '*ð®ð§¸*',
  '******'
]
*/

wrapGifts(["ð·"])
/* Resultado:
[ '****',
  '*ð·*',
  '****'
]
*/