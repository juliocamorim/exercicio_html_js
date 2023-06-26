const form = document.getElementById('areas');
const numeroA = document.getElementById("A");
const numeroB = document.getElementById("B");
const campoA = numeroA;
const campoB = numeroB;
let formEValido = false;

function validaCampo(campoA, campoB){
    return campoB > campoA;
}
form.addEventListener('submit', function(e){
    e.preventDefault();

    const valorDoInputA = parseFloat(numeroA.value);
    const valorDoInputB = parseFloat(numeroB.value);
    const mensagemSucesso = `Resultado correto, o valor de B é maior que o valor de A!`;
    const mensagemErro = `Resultado inválido, o valor de B é menor que o valor de A!`;

    formEValido = validaCampo(valorDoInputA, valorDoInputB);
        if (formEValido == true) {
            const containerMensagemSucesso = document.querySelector(".message-sucess");
            containerMensagemSucesso.innerHTML = mensagemSucesso;
            containerMensagemSucesso.style.display = "block";
            containerMensagemSucesso.style.backgroundColor = "green";
            campoA.value = "";
            campoB.value = "";
    }else{
        if (!formEValido) {
            const containerMensagemErro = document.querySelector(".message-sucess");
            containerMensagemErro.innerHTML = mensagemErro;
            containerMensagemErro.style.display = "block";
            containerMensagemErro.style.backgroundColor = "red";
        };
    };
});