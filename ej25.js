function canMouseEat(direction, game) {
    // ¡Gracias por jugar a AdventJS 2021! 🤗
    // ¡Nos vemos el año que viene! 👋
    // Por favor, comparte en las redes qué te ha parecido! 🚀
    var alto = game.length
    var raton = [0,0]

    for (let i = 0; i < alto; i++){
        const pos = game[i].indexOf("m")
        if (pos !== -1) raton = [i, pos]
    }

    var a = ""
    var b = ""

    switch(direction){
        case "up":
            a = raton[0] - 1
            b = raton[1]
            if (game[a][b] === "*") return true
            break;
        case "down":
            a = raton[0] + 1
            b = raton[1]
            if (game[a][b] === "*") return true
            break;
        case "left":
            a = raton[0]
            b = raton[1] - 1
            if (game[a][b] === "*") return true
            break;
        case "right":
            a = raton[0]
            b = raton[1] + 1
            if (game[a][b] === "*") return true
            break;
    }
    

    //console.log(raton)
    return false
}

const room = [
    [' ', ' ', ' '],
    [' ', ' ', 'm'],
    [' ', ' ', '*']
  ]
  
  console.log(canMouseEat('up',    room))   // false
  console.log(canMouseEat('down',  room))   // true
  console.log(canMouseEat('right', room))   // false
  console.log(canMouseEat('left',  room))   // false
  
  const room2 = [
    ['*', ' ', ' ', ' '],
    [' ', 'm', '*', ' '],
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', '*']
  ]
  
  console.log(canMouseEat('up',    room2))   // false
  console.log(canMouseEat('down',  room2))   // false
  console.log(canMouseEat('right', room2))   // true
  console.log(canMouseEat('left',  room2))   // false