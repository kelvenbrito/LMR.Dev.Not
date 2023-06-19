function MostrarNome() {
    let Nome = document.getElementById('MeuForm').pnome.value;
    let Sobrenome = document.getElementById('MeuForm').psobre.value;
    let NomeCompleto = Nome + ' ' + Sobrenome;
    alert(' Olá ' + NomeCompleto);
}

function Somar() {
    let n1 = document.getElementById('MyCalc').pn1.value;
    let n2 = document.getElementById('MyCalc').pn2.value;
    if (n1 == '' || n2 == '') {
        alert("Está faltando um valor")
    } else {
        resposta = parseInt(n1) + parseInt(n2);
        alert('O resultado da soma é: ' + resposta);
    }
}

function Mult() {
    let n1 = document.getElementById('MyCalc').pn1.value;
    let n2 = document.getElementById('MyCalc').pn2.value;
    if (n1 == '' || n2 == '') {
        alert("Está faltando um valor")
    } else {
        let resposta = parseInt(n1) * parseInt(n2);
        alert('O resultado da Multiícação é: ' + resposta);
    }
}

function Sub() {

    let n1 = document.getElementById('MyCalc').pn1.value;
    let n2 = document.getElementById('MyCalc').pn2.value;
    if (n1 == '' || n2 == '') {
        alert("Está faltando um valor")
    } else {
        let resposta = parseInt(n1) - parseInt(n2);
        alert('O resultado da Subtração é: ' + resposta);
    }
}

function Div() {
    let n1 = document.getElementById('MyCalc').pn1.value;
    let n2 = document.getElementById('MyCalc').pn2.value;
    if (n1 == '' || n2 == '') {
        alert("Está faltando um valor")
    } else {
        if (n2 == 0) {
            alert('Não dividiras por zero!')
        } else {
            let resposta = parseFloat(n1) / parseFloat(n2);
            alert('O resultado da Divisão é: ' + resposta);
        }
    }
}