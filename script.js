// Função para calcular o IMC
function calcularIMC() {
    // Obter os valores do formulário
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);

    // Verificar se os valores são válidos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, insira valores válidos para peso e altura.");
        return;
    }

    // Calcular o IMC
    var imc = peso / (altura * altura);

    // Exibir o resultado dentro da div "resultado"
    var resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "Seu IMC é: " + imc.toFixed(2);

    // Determinar a faixa de IMC
    var faixa = "";
    if (imc < 18.5) {
        faixa = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        faixa = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        faixa = "Sobrepeso";
    } else if (imc >= 30) {
        faixa = "Obeso";
    }

    // Exibir a faixa de IMC
    resultadoElement.innerHTML += "<br>Faixa de IMC: " + faixa;
}

// Adicionar evento de envio ao formulário
var form = document.getElementById("calc-imc-form");
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar que o formulário seja enviado
    calcularIMC(); // Chamar a função de cálculo
});

