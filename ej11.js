function shouldBuyFidelity(times) {
    // ¡No olvides compartir tu solución en redes!
    // Entrada normal: 12$ * 3 = 36$
    // Tarjeta fidelidad: 250$ + (12$ * 0,75) +  (12$ * 0,75 * 0,75) + (12$ * 0,75 * 0,75 * 0,75) = 270,8125$
    var precioTarjeta = 250;

    for (let i = times; i > 0 ; i--){
        var precioEntrada = 12;
        for (let j = i; j > 0; j--){
            precioEntrada = precioEntrada * 0.75
        }
        precioTarjeta += precioEntrada
    }

    return (precioTarjeta < (12 * times))
}
  
  console.log(shouldBuyFidelity(3)) // false -> Mejor comprar tickets de un sólo uso
  shouldBuyFidelity(1) // false -> Mejor comprar tickets de un sólo uso
  shouldBuyFidelity(100) // true -> Mejor comprar tarjeta fidelidad
  