function calcular(event) {
    event.preventDefault()
    const nota = document.getElementById('nota').value;
    const Aluno = document.getElementById('aluno').value;

    const resultado = document.getElementById('resultado');
    
    
    if (nota < 0 || nota > 10 || Aluno.length <= 3 || !Number(nota)) {
        resultado.innerHTML = `<span class='reprovado'>Dados inválidos</span>`
    }
    else if(nota >= 7) {
        resultado.innerHTML = `
        <p>${Aluno} tirou a nota ${nota} <span class='aprovado'>Aluno aprovado</span></p>
        
        `
    }
    else {
        resultado.innerHTML = `
        <p>${Aluno} tirou a nota ${nota} e o ${Aluno} <span class='reprovado'>Se Fodeu</span></p>
        `
    }
    
    }
    calcular();