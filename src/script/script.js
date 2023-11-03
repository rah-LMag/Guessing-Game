// Variáveis para armazenar o número de tentativas, o número sorteado e a referência ao elemento do resultado no HTML.
var tentativasRestantes = 10;
var numeroSorteado = Math.floor(Math.random() * 31);
var resBtn = document.getElementById('res')
// Função para verificar o número inserido pelo usuário
function verificarnumber() {
    // Obtém o número inserido pelo usuário e os elementos de resultado no html.
    var ten = document.getElementById('num').value;
    var resultadoElement = document.getElementById('resultado');
    // Loop "enquanto" para continuar a verificação enquanto houver tentativas restantes.
    do { 
        // Verifica se o número inserido é menor que o número sorteado
        if (ten < numeroSorteado) {
            tentativasRestantes--;
            ten = document.getElementById('num').value;
            resultadoElement.textContent = "O Número sorteado é maior.";
        // Verifica se o número inserido é maior que o número sorteado
        } else if (ten > numeroSorteado) {
            tentativasRestantes--;
            ten = document.getElementById('num').value;
            resultadoElement.textContent = "O Número sorteado é menor.";
        //Se as condições anteriores não forem atendidas, o usuário acertou o número
        } else {
            resultadoElement.textContent = "Parabéns, você acertou o número!";
        }
        // Verifica se o número de tentativas chegou a zero
        if (tentativasRestantes === 0) {
            tentativasDisplay.textContent = "Tentativas Restantes: 0"
            // Exibe uma mensagem mostrando que o número de tentativas acabaram, e revela o número sorteado
            exibirResultado("Suas tentativas acabaram. O número sorteado era: " + numeroSorteado);
        }
        // Atualiza o display com número de tentativas restantes.
        tentativasDisplay.textContent = "Tentativas Restantes: " + tentativasRestantes;

    } while (tentativasRestantes < 0 || numeroSorteado === ten);
}
// Função para resetar o jogo
function resetarJogo() {
    tentativasRestantes = 10;
    numeroSorteado = Math.floor(Math.random() * 31);
    document.getElementById('num').value = '';
    exibirResultado();
}
// Função para exibir um resultado no HTML.
function exibirResultado(resultado) {
    document.getElementById("resultado").textContent = resultado;
}
// Adiciona um listener para o evento de tecla pressionada, permitindo que o usuário pressione Enter para verificar o número.
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        verificarnumber();
    }
});
