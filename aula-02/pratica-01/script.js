function calcular(event) {
event.preventDefault()
const nota = document.getElementById('nota').value;
const resultado = document.getElementById('resultado');


if (nota < 0 || nota > 10 ) {
    resultado.textContent = 'nota invalida'
}
else if(nota >= 7) {
    resultado.textContent = "Aluno aprovado"
}
else {
    resultado.textContent = 'se fodeu'
}

}
calcular();