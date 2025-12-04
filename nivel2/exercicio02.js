/* 2. Imprimir a média ponderada de 4 números
Pesos: 3, 1, 4, 2
*/
// Definir todas as variáveis
let num1 = 4
let num2 = 7
let num3 = 8
let num4 = 23
let media = (num1*3  + num2*1 + num3*4 + num4*2)/10 /*Variável média recebe a soma dos 4 números 
multiplicados por seus respectivos pesos dividida por 10 (soma dos pesos)*/
console.log(`A média dos números é igual a ${media.toFixed(3)}`) //Printa média na tela
