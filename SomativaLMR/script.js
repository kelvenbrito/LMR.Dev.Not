var horas = document.getElementById('horas');
var minutos = document.getElementById('minutos');
var segundos = document.getElementById('segundos');
var dia = document.getElementById('dia');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();
    let d = dateToday.getDate();
    let dE = 30;
    
    

   
    if(d!=dE){
        d= parseInt(dE) - parseInt(d);
        hr = 24 - parseInt(hr);
        min = 60 - parseInt(min);
        s =  60 - parseInt(s);
   
    }
    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    if (s < 10) s = '0' + s;
    if (d < 10) d = '0' + d;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
    dia.textContent = d;


})

function Verif() {
    let nome = document.getElementById('cad').fNome.value;
    let sobNome = document.getElementById('cad').fSobrenome.value;
    let idade = document.getElementById('cad').fIdade.value;
    let user = document.getElementById('cad').fUserName.value;
    let cidade = document.getElementById('cad').fCidade.value;
    let estado = document.getElementById('cad').fEstado.value;
    let email = document.getElementById('cad').fEmail.value;
    let Cemail = document.getElementById('cad').fConfirmaEmail.value;
    let senha = document.getElementById('cad').fSenha.value;
    let Csenha = document.getElementById('cad').fConfirmaSenha.value;
    let Click = document.getElementById('cad').clickaqui.value;

    if (nome == '' || sobNome == '' || idade == '' || user == '' || cidade == '' || estado == '' || email == '' || Cemail == '' || senha == '' || Csenha == '' ) {
        alert("Formulario incompleto verifique se não há algum campo em branco");
    } else {
        if (email != Cemail) {
            alert('A confirmação do  email está diferente do email digite novamente');
        }
        else if ( senha != Csenha){
            alert('A confirmação da senha está diferente da senha digite novamente');
        }else{
            alert('Cadastro efetuado com sucesso');
        }



    }


}

function mudarConteudo(){

    let nome = document.getElementById('cad').fNome.value;
    let sobNome = document.getElementById('cad').fSobrenome.value;
    let idade = document.getElementById('cad').fIdade.value;
    let user = document.getElementById('cad').fUserName.value;
    let cidade = document.getElementById('cad').fCidade.value;
  
    let email = document.getElementById('cad').fEmail.value;

    let senha = document.getElementById('cad').fSenha.value;
   
    

    
    let card = `<div class="card" style="width: 18rem;">
    <ul class="list-group list-group-flush">
        <li class="list-group-item">${nome}</li>
        <li class="list-group-item">${sobNome}</li>
        <li class="list-group-item">${idade}</li>
        <li class="list-group-item">${user}</li>
        <li class="list-group-item">${cidade}</li>
       
        <li class="list-group-item">${email}</li>
       
        <li class="list-group-item">${senha}</li>
        
       

    </ul>
</div>`;

    document.getElementById("paragrafo").innerHTML += card;
  }


