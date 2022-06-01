function listGifts(letter) {
    // ¡Tú puedes!
    const tmpPal = (letter.trim()).split(" ");
    const Palabras = {};
      for (let palabra of tmpPal){
          if (palabra.charAt(0) != "_"){
              if (Palabras[palabra]){
                  Palabras[palabra] =  parseInt(Palabras[palabra]) + 1;
           }else{
                  Palabras[palabra] = 1;
              }
          }
      }
    return Palabras
}

const carta = 'bici coche balón _playstation bici coche peluche'

const regalos = listGifts(carta)

console.log(regalos)
/*
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/