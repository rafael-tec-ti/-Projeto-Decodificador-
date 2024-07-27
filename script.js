document.getElementById("botao-criptografar").addEventListener("click", function() {
    const textoInicial = document.getElementById("texto-inicial").value;
    if (textoInicial.trim() === "") {
        exibirMensagemErro("Digite um texto para criptografar.");
        return;
    }
    const textoCriptografado = criptografarTexto(textoInicial);
    document.getElementById("texto-criptografado").value = textoCriptografado;
    document.getElementById("texto-inicial").value = "";
    limparMensagemErro();
});

document.getElementById("botao-descriptografar").addEventListener("click", function() {
    const textoCriptografado = document.getElementById("texto-criptografado").value;
    if (textoCriptografado.trim() === "") {
        exibirMensagemErro("Não é possível descriptografar sem primeiro criptografar algo.");
        return;
    }
    const textoDescriptografado = descriptografarTexto(textoCriptografado);
    document.getElementById("texto-inicial").value = textoDescriptografado;
    document.getElementById("texto-criptografado").value = "";
    limparMensagemErro();
});

document.getElementById("botao-reset").addEventListener("click", function() {
    document.getElementById("texto-inicial").value = "";
    document.getElementById("texto-criptografado").value = "";
    limparMensagemErro();
});

function criptografarTexto(texto) {
    const mapaCriptografia = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    const textoMinusculo = texto.toLowerCase();

    let textoCriptografado = '';
    for (const letra of textoMinusculo) {
        if (mapaCriptografia.hasOwnProperty(letra)) {
            textoCriptografado += mapaCriptografia[letra];
        } else {
            textoCriptografado += letra;
        }
    }

    return textoCriptografado;
}

function descriptografarTexto(texto) {
    const mapaDescriptografia = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    let textoDescriptografado = texto;

    for (const chave in mapaDescriptografia) {
        const regex = new RegExp(chave, 'g');
        textoDescriptografado = textoDescriptografado.replace(regex, mapaDescriptografia[chave]);
    }

    return textoDescriptografado;
}

function exibirMensagemErro(mensagem) {
    const mensagemErro = document.getElementById("mensagem-erro");
    mensagemErro.textContent = mensagem;
    mensagemErro.style.color = "red";
    mensagemErro.style.marginTop = "20px";
}

function limparMensagemErro() {
    const mensagemErro = document.getElementById("mensagem-erro");
    mensagemErro.textContent = "";
}
