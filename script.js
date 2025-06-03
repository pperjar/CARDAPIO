
const main = document.querySelector('main');//selecionar a tag main
main.innerHTML="<h2> Cardapio do dia </h2>";
//alista no js começa no zero.
const diaDaSemana =['domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sabado-letivo'];
const hoje= new Date().getDay();
//Date informa a data e o getDay()informa qul dos 7(0-6)
const diaAtual= diaDaSemana[hoje]
const menuDoDia = cardapio.find (menu => menu.dia === diaAtual);
if (menuDoDia){
const h3 = document.createElement('h3');
h3.textContent = menuDoDia.dia;
main.appendChild(h3);
const section = document.createElement ('section');
const ul = document.createElement('ul');

menuDoDia.cardapio.split(', ').forEach('figure');
const li= document.createElement('li');
li.textContent=item;
ul.appendChild(li);

}