function encriptar(data) {
    /* 
    A letra "a" é convertida para "ai"
    A letra "e" é convertida para "enter"
    A letra "i" é convertida para "imes"
    A letra "o" é convertida para "ober"
    A letra "u" é convertida para "ufat"
    */
    // var data = document.getElementById("txtarea_enc");

    var tam = data.length;
    var textEncriptado = [];

    for (i = 0; i < tam; i++) {
        const char_ = data[i].charAt().toLowerCase()
        switch (char_) {
            case 'a':
                textEncriptado[i] = "ai";
                break;
            case 'e':
                textEncriptado[i] = "enter";
                break;
            case 'i':
                textEncriptado[i] = "imes";
                break;
            case 'o':
                textEncriptado[i] = "ober";
                break;
            case 'u':
                textEncriptado[i] = "ufat";
                break;
            default:
                textEncriptado[i] = data[i];

        }

    }
    return textEncriptado.join("");
}

function desencriptar(data) {
    /* 
    A letra "a" é convertida para "ai"
    A letra "e" é convertida para "enter"
    A letra "i" é convertida para "imes"
    A letra "o" é convertida para "ober"
    A letra "u" é convertida para "ufat"
    */
    var textDesencriptado = data;
    textDesencriptado = data.replace(/ai/g, "a");
    textDesencriptado = textDesencriptado.replace(/enter/g, "e");
    textDesencriptado = textDesencriptado.replace(/imes/g, "i");
    textDesencriptado = textDesencriptado.replace(/ober/g, "o");
    textDesencriptado = textDesencriptado.replace(/ufat/g, "u");
    return textDesencriptado;


}

function limpaText() {
    document.getElementById('txtarea_enc').value = " ";
    //  document.getElementById('txta').value = " ";
}

function copyTextArea() {
    //printMensagem(data)
    let textoCopiado = document.getElementById("txta");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
    //  alert("O texto é: " + textoCopiado.value);
    //return data;
    alert(" Texto Copiado ");
}

//retira acentos de letras/palavras
function retiraAcentos(string) {

    var stringModified = string.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    return stringModified;

}

//retira caracter special
function retirarCaracterSpecial(data) {
    return desired = data.replace(/[^\w\s]/gi, '');
}

function exibirMensagem(data) {
    data = document.getElementById("txtarea_enc");
    var ddata = document.getElementById("txta");
    var dataLowerCase = data.value.toLowerCase();
    var result = (encriptar(retiraAcentos(dataLowerCase)));
    ddata.innerHTML = result;
    return dataLowerCase;
}

function exibirMensagem_desencript(data) {
    data = document.getElementById("txtarea_enc");
    var ddata = document.getElementById("txta");
    var dataLowerCase = data.value.toLowerCase();
    //printMensagem(desencriptar(retiraAcentos(dataLowerCase)));
    // printMensagem(desencriptar(dataLowerCase));
    var desencripts = desencriptar(dataLowerCase);
    ddata.innerHTML = desencripts;
    return desencripts;
}

function toLowerMensagem(data) {
    var dataLowerCase = data.value.toLowerCase()
    return dataLowerCase;
}

function printMensagem(data) {
    alert(data);
}
//aborta caso texto possua letra maiuscula
function exibirMensagem_alert() {
    var data = document.getElementById("txtarea_enc");
    if (data.value === data.value.toLowerCase()) {
        printMensagem(data.value);

    } else {
        document.write("Digite apenas letras minúsculas")
    }
}
var btn = document.getElementById("btn");
btn.addEventListener("click", exibirMensagem);

var btn = document.getElementById("btn_desencript");
btn.addEventListener("click", exibirMensagem_desencript);

var btn = document.getElementById("btn_copy");
btn.addEventListener("click", copyTextArea);