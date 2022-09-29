const paragrafo = document.getElementById("mensagem")

const checaCaps = (event) => {
    if(event.shiftKey){
        paragrafo.innerHTML = "atenção: segurando Shift"
    }else{
        paragrafo.innerHTML = ""
    }
}
