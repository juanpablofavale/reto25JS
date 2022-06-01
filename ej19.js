function learn(time, courses) {
    // ¡No olvides compartir tu solución en redes!
    var valor = 0
    var res = [0,0]

    for (let i = 0; i < courses.length ; i++){
        for (let j = i + 1 ; j < courses.length ; j++){
            if (courses[i] + courses[j] <= time){
                if (valor < (courses[i] + courses[j])){
                    valor = courses[i] + courses[j]
                    res = [i , j]
                }
            }
        }
    }

    //completar return
    console.log(res)
    if (res[1] != 0){
        return res
    }else{
        return null
    }
}

learn(10, [2, 3, 8, 1, 4]) // [0, 2] -> con 10 horas disponibles lo mejor es que completemos los cursos en el índice 0 y 2.

learn(15, [2, 10, 4, 1]) // [1, 2] -> Los cursos en [1, 2] son 14 horas, es la mejor opción.

learn(25, [10, 15, 20, 5]) // [0, 1] -> los cursos [0, 1] y [2, 3] completan exactamente con 25 horas pero siempre devolvemos el primero que encontremos

learn(8, [8, 2, 1]) // [1, 2] -> para hacer dos cursos, no podemos hacer el de 8 horas, así que devolvemos el de 1 y 2.

learn(8, [8, 2, 1, 4, 3]) // [3, 4] -> usamos el máximo tiempo disponible así que [3, 4] usa 7 horas y el [1, 2] sólo usaría 3 horas.

learn(4, [10, 14, 20]) // null -> no nos da tiempo a hacer dos cursos

console.log(learn(5, [5, 5, 5])) // null -> no nos da tiempo a hacer dos cursos