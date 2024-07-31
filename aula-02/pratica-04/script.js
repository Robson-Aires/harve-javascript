function calcular(event) {
    event.preventDefault()
    const nota = document.getElementById('nota').value;
    const resultado = document.getElementById('resultado');

    
    
    const condicaoAluno = nota > 6 ? resultado.textContent = "Aluno aprovado" : resultado.textContent = "Aluno reprovado"
    }
    calcular();