function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
    console.log(valorEmDolarNumerico);

    // Transformando para real o valor do dólar.
    var valorEmReal = (valorEmDolarNumerico * 5.01).toFixed(2);
    console.log(valorEmReal);

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em real é R$ " + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;
}

function converterEuro() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
    console.log(valorEmDolarNumerico);

    // Transformando o valor do dólar em euro:
    var valorEmEuro = (valorEmDolarNumerico * 0.91).toFixed(2);
    console.log(valorEmEuro);

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em euro é € " + valorEmEuro;
    elementoValorConvertido.innerHTML = valorConvertido;
}