const paragrafo = document.getElementById('mensagem')

function checaCaps(event) {
    if(event.shiftKey){
        paragrafo.innerHTML = "Apertou o Shift";
        console.log(paragrafo)
      }else{
        paragrafo.innerHTML = "Não Apertou o Shift";
      }
}