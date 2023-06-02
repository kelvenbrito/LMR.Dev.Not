function Verif() {
    let nome = document.getElementById('cad').NomeCom.value;
    let endereco = document.getElementById('cad').End.value;
    let email = document.getElementById('cad').Email.value;
    let Cemail = document.getElementById('cad').CEmail.value;
    let senha = document.getElementById('cad').senha.value;
    let Csenha = document.getElementById('cad').Csenha.value;
    let Click = document.getElementById('cad').clickaqui.value;

    if (nome == '' || endereco == '' || email == '' || Cemail == '' || senha == '' || Csenha == '' || Click == '') {
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

 
