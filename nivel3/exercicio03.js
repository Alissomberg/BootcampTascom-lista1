// 3. Calcular distância entre dois pontos tridimensionais


// Valores dos pontos
let pontox1 = 2, pontoy1 = 3, pontoz1 = 4
let pontox2 = 5, pontoy2 = 6, pontoz2 = 7

// Deltas
let deltax = pontox2 - pontox1, deltay = pontoy2 - pontoy1, deltaz = pontoz2 - pontoz1

let distancia = ((deltax)**2 + (deltay)**2 + (deltaz)**2)**(1/2)
console.log(`Coordenadas do Ponto A: x:${pontox1}, y:${pontoy1}, z:${pontoz1}\nCoordenadas do Ponto B: x:${pontox2}, y:${pontoy2}, z:${pontoz2}\nDistância: ${distancia.toFixed(3)}`)
