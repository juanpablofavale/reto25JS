function maxProfit(prices) {
    // ¡Y no olvides compartir tu solución en redes!

    var min = 0
    var max = 0
    var dif = 0

    prices.map(element => {
        if (min === 0){
            min = element
        }else{
            if (element < min){
                if (min < max && dif < max - min){
                    dif = max - min
                }
                min = element
                max = 0
            }else if (element > max){
                max = element
            }
        }
    });

    if (min < max && dif < max - min){
        dif = max - min
    }

    return (dif > 0 ? dif : -1)
}

const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
console.log(maxProfit(pricesBtc)) // -> 16 (compra a 18, vende a 34)

const pricesEth = [10, 20, 30, 40, 50, 60, 70]  
console.log(maxProfit(pricesEth)) // -> 60 (compra a 10, vende a 70)