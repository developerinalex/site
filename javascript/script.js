function alerta() {
    document.getElementById("mensagem").innerHTML = "Obrigado por chegar até aqui! Nunca desista dos seu sonho e continue estudando!";
    addClass()

    setTimeout(function() {
        document.getElementById("mensagem").innerHTML = "";
    }, 3000);
}

document.getElementById("botao").addEventListener("click", alerta);