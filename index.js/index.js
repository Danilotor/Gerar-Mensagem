
async function GeradorDeMensagem() {
    const url = "https://api.adviceslip.com/advice"
    const resposta = await fetch(url)
    const json = await resposta.json()
     console.log(json)
     return json
}


async function Mensagem (){
    const imagens = await GeradorDeMensagem()
    
    const texto = imagens.slip.advice
    document.getElementById("Texto").innerText = texto
    console.log(texto)
}


Mensagem()



function trocaDeMensagem (){
    const botao = document.getElementById("botao")
  botao.addEventListener("click",()=>{
        Mensagem()
    })
}

trocaDeMensagem()
