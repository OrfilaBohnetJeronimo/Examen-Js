//1
function salarioJuan ()
{
    let salarioAnual = 21600.
    return 'El salario mensual de Juan sera ' + salarioAnual / 12
}
alert(salarioJuan())
console.log(salarioJuan())

//2
function salarioMarcos ()
{
    let salarioMensual = 21600.
    return 'El salario anual de Marcos sera ' + salarioMensual * 12
}
alert(salarioMarcos())
console.log(salarioMarcos())

//3
function promedioNotas (a, b, c)
{
    var Nota1 = a
    var Nota2 = b
    var Nota3 = c
    return 'El promedio de las notas es de ' + (Nota1 + Nota2 + Nota3) / 3
}
var Nota1 = Number(prompt('Cual fue la primeta nota?'))
var Nota2 = Number(prompt('Cual fue la segunda nota?'))
var Nota3 = Number(prompt('Cual fue la tercera nota?'))
alert(promedioNotas(Nota1, Nota2, Nota3))
console.log(promedioNotas(Nota1, Nota2, Nota3))