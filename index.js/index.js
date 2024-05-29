async function geradorDeMensagem() {
    const url = "https://api.adviceslip.com/advice"
    const resposta = await fetch(url)
    const json = await resposta.json()

    return json;
}


async function Mensagem() {
    const imagens = await geradorDeMensagem()
    const texto = imagens.slip.advice
    document.getElementById("Texto").innerText = texto
    
     
}


const botao = document.getElementById("botao")
botao.addEventListener("click", () => {
    gerarAMensagem()
})


async function gerarAMensagem() {
   
   
    try {
        await geradorDeMensagem();
        await Mensagem();
        const url = "https://api.adviceslip.com/advice"
        const resposta = await fetch(url)
// eu chamei a api novamente para fazer o teste de resposta.ok pois como eu fiz meu codigo separado foi a unica maneira -
if (!resposta.ok){
    throw new Error("teste errou")
}

    } catch (error) {
        console.log(error)
    } finally {
        console.log("a troca foi realizada com sucesso")
    }
}

gerarAMensagem()   
