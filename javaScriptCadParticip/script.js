function cadPessoas(){
    
    let nome = document.getElementById("fNome").value;
    let sobrenome = document.getElementById("fSobrenome").value;
    let idade = document.getElementById("fIdade").value;
    let email = document.getElementById("fEmail").value;
    console.log(nome)

    
    let tb = document.getElementById("tabelaPessoas");
    let qtdLinhas = tb.ariaRowSpan.length;
    let linha = tb.insertRow(qtdLinhas);

    let cellCodigo = linha.insertCell(0);
    let cellNome = linha.insertCell(1);
    let cellSobrenome = linha.insertCell(2);
    let cellIdade = linha.insertCell(3);
    let cellEmail = linha.insertCell(4);

    cellCodigo.innerHTML = qtdLinhas;
    cellNome.innerHTML = nome;
    cellSobrenome.innerHTML = sobrenome;
    cellIdade.innerHTML = idade;
    cellEmail.innerHTML = email;
    console.log(nome)

let card = `<div class="card" style="width: 18rem;">
<ul class="list-group list-group-flush">
    <li class="list-group-item">${nome}</li>
    <li class="list-group-item">${sobrenome}</li>
    <li class="list-group-item">${idade}</li>
    <li class="list-group-item">${email}</li>
</ul>
</div>`;

}
function mudarConteudo() {
    let nome = document.getElementById("fNome").value;
    let sobrenome = document.getElementById("fSobrenome").value;
    let idade = document.getElementById("fIdade").value;
    let email = document.getElementById("fEmail").value;

    let card = `<div class="card" style="width: 18rem;">
    <ul class="list-group list-group-flush">
        <li class="list-group-item">${nome}</li>
        <li class="list-group-item">${sobrenome}</li>
        <li class="list-group-item">${idade}</li>
        <li class="list-group-item">${email}</li>
    </ul>
</div>`;

    document.getElementById("paragrafo").innerHTML += card;
  }



  