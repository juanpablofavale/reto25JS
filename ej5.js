function daysToXmas(date) {
    // ¡Y no olvides compartir tu solución en redes!
    const fecha = new Date("Dec 25, 2021");
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);

    return ((((fecha - date)/1000)/60)/60)/24;
}

const date1 = new Date('Dec 1, 2021')
console.log(daysToXmas(date1))
const date2 = new Date('Dec 24, 2021 00:00:01')
console.log(daysToXmas(date2))
const date3 = new Date('Dec 24, 2021 23:59:59')
console.log(daysToXmas(date3))
const date4 = new Date("December 20, 2021 03:24:00")
console.log(daysToXmas(date4))