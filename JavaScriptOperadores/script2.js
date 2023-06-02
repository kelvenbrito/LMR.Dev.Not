let HT; //horas trabalhadas
let VH; //Valor hora
let PD; //Pocentual de desconto
let TD; //Total de desconto
let SB; //Salario bruto
let SL; //Salári líquido

HT = prompt('Digite as Horas Trabalhadas: ','Informe aqui');
VH = prompt('Entre com o valor da hora ','Informe aqui. ');
PD = prompt('Informe o porcentual de desconto: ','em porcentagens')
SB = parseFloat(HT)*parseFloat(VH);
TD = parseFloat(PD)*SB/100;
SL = SB - TD;

document.write('Salário = '+SL)