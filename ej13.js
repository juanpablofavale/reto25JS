function wrapGifts(gifts) {
    // ¡No olvides compartir tu solución en redes!
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

wrapGifts(["📷", "⚽️"])
/* Resultado:
[ '****',
  '*📷*',
  '*⚽️*',
  '****'
]
*/

wrapGifts(["🏈🎸", "🎮🧸"])
/* Resultado:
[ '******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]
*/

wrapGifts(["📷"])
/* Resultado:
[ '****',
  '*📷*',
  '****'
]
*/