var refazerCalculo = false;
do {
    const porcentagemParaCalculo = 0.7;
    var gasolina = prompt('Digite o valor do litro da gasolina');
    var alcool = prompt('Digite o valor do litro do álcool');
    var difAlcoolGasolina = parseFloat(alcool) / parseFloat(gasolina);
    if (difAlcoolGasolina > porcentagemParaCalculo) {
        alert('Economize mais por abastecer com gasolina');
    } else if (difAlcoolGasolina < porcentagemParaCalculo) {
        alert('Enonomize mais por abastecer com álcool');
    } else {
        alert('Tanto o álcool como a gasolina, .');
    }
    refazerCalculo = window.confirm("Deseja refazer o calcúlo?");
} while (refazerCalculo)