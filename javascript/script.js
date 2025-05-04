function alerta() {
    document.getElementById("mensagem").innerHTML = "Obrigado por chegar até aqui! Nunca desista dos seus sonhos e continue estudando!";

    setTimeout(function() {
        document.getElementById("mensagem").innerHTML = "";
    }, 3000);
}

document.getElementById("botao").addEventListener("click", alerta);