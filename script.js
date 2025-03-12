/*
<h2>Cardapio do Dia</h2>
<h3>Segunda-feira</h3>
<section>
    <ul>
    <li>Feijoada</li>
    <li>Arroz</li>
    <li>Couve</li>
    <li>Farofa</li>
    <li>Torresmo</li>
    </ul>
      
    
    <figure>
        <img src="img/image.png" alt="feijoada">
    </figure>
</section>
*/
const main = document.querySelector('main');//selecionar a tag main
main.innerHTML="<h2> Cardapio do dia </h2>";
//alista no js começa no zero.
const diaDaSemana =['domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sabado-letivo'];
const hoje= new Date().getDay();
//Date informa a data e o getDay()informa qul dos 7(0-6)
const diaAtual= diaDaSemana[hoje]
alert(diaAtual)