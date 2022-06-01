function getCoins(change) {
    // ¡No olvides compartir tu solución en redes!
    const coins = [1, 2 , 5, 10, 20, 50]
    var resultado = [0, 0, 0, 0, 0, 0]
    var i = 5
  
    while(change > 0){
      if ((change - coins[i]) > 0){
        resultado[i] += 1;
        change = change - coins[i]
      }else if (change - coins[i] === 0){
        resultado[i] += 1;
        change = change - coins[i]
        break;
      }else{
        i--;
      }
    }

    return resultado;
  }

getCoins(51) // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
getCoins(3) // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
getCoins(5) // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
getCoins(16) // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
getCoins(100) // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos