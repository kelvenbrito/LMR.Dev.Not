// Definição das variáveis e elementos utilizados
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const botaoParar = document.getElementById('pararContador');
const botaoReiniciar = document.getElementById('reiniciar');
const min = document.getElementById('minutosInput');
const seg = document.getElementById('segundosInput');
const botaoiniciar = document.getElementById('iniciar');
const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fundo = document.querySelector("#fade");


let intervalo = 10; // Intervalo em milissegundos (10 milissegundos)
let Contador;
let pausado = false;
let tempoRestante = 0;
let tempReinicio=0;
let tempInvert=0;






// Função para abrir e fechar o modal

const mudarModal = () => {
  modal.classList.toggle("hide");
  fundo.classList.toggle("hide");
};

[openModalButton, closeModalButton, fundo].forEach((el) => {
  el.addEventListener("click", () => mudarModal());
});

// Função para definir o tempo e iniciar o contado
function definirCont() {
   
   
//calculo para contar o tempo do relogio
    tempoRestante = ((min.value * 60000) + (seg.value * 1000));
    tempReinicio = ((min.value * 60000) + (seg.value * 1000));
    tempInvert = tempoRestante;
    botaoiniciar.style.display = "inline";
    openModalButton.textContent = "Redefinir"
    mudarModal();
    clearInterval(Contador);
    iniciarContador();
}

// Função para zerar o contador
function Zerar() {
    clearInterval(Contador);
    tempoRestante = 0;
    minutos.textContent = '00';
    segundos.textContent = '00';
    milisegundos.textContent = '00';
    botaoParar.textContent = 'Parar Contagem';
    botaoParar.disabled = true;
    pausado = false;
    botaoReiniciar.disabled = false;
}


// Função para reiniciar o contador
function reiniciar() {
    clearInterval(Contador);
    tempoRestante = tempReinicio; // Restaura o valor original
    botaoParar.textContent = 'Parar Contagem';
    botaoParar.disabled = false;
    pausado = false;
    botaoReiniciar.disabled = true;
    

    Contador = setInterval(function () {
        if (!pausado) {
            if (tempoRestante <= 0) {
                clearInterval(Contador);
                minutos.textContent = '00';
                segundos.textContent = '00';
                milisegundos.textContent = '00';
                botaoParar.disabled = true;
            } else {
                tempoRestante -= intervalo;
                let minutosr = Math.floor(tempoRestante / 60000);
                let segundosr = Math.floor((tempoRestante % 60000) / 1000);
                let milisegundosr = tempoRestante % 1000;

                minutos.textContent = minutosr < 10 ? '0' + minutosr : minutosr;
                segundos.textContent = segundosr < 10 ? '0' + segundosr : segundosr;
                milisegundos.textContent = milisegundosr < 10 ? '00' + milisegundosr : (milisegundosr < 100 ? '0' + milisegundosr : milisegundosr);
            }
        }
    }, intervalo);
}


// Função para inverter a contagem
function inverter() {
    if (!pausado) {
        clearInterval(Contador);
        pausado = true;
        botaoParar.textContent = 'Retomar Contagem';
    } else {
        pausado = false;
        botaoParar.textContent = 'Parar Contagem';
        Contador = setInterval(function () {
            if (!pausado) {
                if (tempoRestante < 0) {
                    clearInterval(Contador);
                    minutos.textContent = '00';
                    segundos.textContent = '00';
                    milisegundos.textContent = '00';
                    botaoParar.disabled = true;
                } else {
        
                
                    if(tempInvert>=tempoRestante){
                    tempoRestante += intervalo;
                    let minutosI = Math.floor(tempoRestante / 60000);
                    let segundosI = Math.floor((tempoRestante % 60000) / 1000);
                    let milisegundosI = tempoRestante % 1000;
    
                    minutos.textContent = minutosI < 10 ? '0' + minutosI : minutosI;
                    segundos.textContent = segundosI < 10 ? '0' + segundosI : segundosI;
                    milisegundos.textContent = milisegundosI < 10 ? '00' + milisegundosI : (milisegundosI < 100 ? '0' + milisegundosI : milisegundosI);}
                }
            }
        }, intervalo);
    }
}



botaoParar.addEventListener('click', function () {
    if (!pausado) {
        clearInterval(Contador);
        pausado = true;
        botaoParar.textContent = 'Retomar Contagem';
        botaoReiniciar.disabled = false;


    } else {
       
        iniciarContador();



    }

});


// Função para iniciar o contador
function iniciarContador() {
    
    botaoParar.textContent = 'Parar Contagem';
    botaoParar.disabled = false;
    pausado = false;
    botaoReiniciar.disabled = true;
    
 

    Contador = setInterval(function () {
       
        if (!pausado) {
            if (tempoRestante <= 0) {
                clearInterval(Contador);
                minutos.textContent = '00';
                segundos.textContent = '00';
                milisegundos.textContent = '00';
                botaoParar.disabled = true;

            } else {

                tempoRestante -= intervalo;
                let minutosI = Math.floor(tempoRestante / 60000);
                let segundosI = Math.floor((tempoRestante % 60000) / 1000);
                let milisegundosI = tempoRestante % 1000;

                minutos.textContent = minutosI < 10 ? '0' + minutosI : minutosI;
                segundos.textContent = segundosI < 10 ? '0' + segundosI : segundosI;
                milisegundos.textContent = milisegundosI < 10 ? '00' + milisegundosI : (milisegundosI < 100 ? '0' + milisegundosI : milisegundosI);
            }
        }
    }, intervalo);
}