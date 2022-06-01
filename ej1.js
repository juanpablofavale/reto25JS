function contarOvejas(ovejas) {
    // aquí tu magia
    const ovejas2 = [];
    for (let oveja of ovejas){
      if (oveja.color=="rojo" && oveja.name.search(/(n)+(a)+/i) != -1){
        ovejas2.push(oveja);
      }
    }
    return ovejas2
}

const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
]

const ovejasFiltradas = contarOvejas(ovejas)

console.log(ovejasFiltradas)

// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]