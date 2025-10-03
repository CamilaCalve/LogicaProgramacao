//https://viacep.com.br/ws/COLOCAR CEP/json

const cep =document.getElementById("cep")

cep.addEventListener("change", (evento) => {
    let cepUsuario = evento.target 
    buscaCep(cepUsuario.value)

})  // Quando o usuário terminar de digitar o CEP e sair do campo, pegue o valor que ele digitou e chame a função buscaCep com esse valor.

async function buscaCep(cepUsuario){ 

    let erroCep = document.getElementById("erro")
    erroCep.innerHTML = ""

    try {
        let consultaCEP = await fetch(`https://viacep.com.br/ws/${cepUsuario}/json`)

        let consultaCEPJson = await consultaCEP.json()
       
        if (consultaCEPJson.erro){
            throw Error ("CEP INEXISTENTE!!")
        }

        preencheCampos(consultaCEPJson)  // função "preencheCampos" pega os dados do JSON e coloca nos inputs de rua, bairro, cidade e estado.
    }
    catch {
        erroCep.innerHTML = "CEP INVÁLIDO, TENTE NOVAMENTE!!"
        apagarCampo()
    }

}

function preencheCampos(cepJson){
   
    let rua = document.getElementById("rua")
    let bairro = document.getElementById("bairro")
    let cidade = document.getElementById("cidade")
    let estado = document.getElementById("estado")

    rua.value = cepJson.logradouro
    bairro.value = cepJson.bairro
    cidade.value = cepJson.localidade
    estado.value = cepJson.uf
}

function apagarCampo(cepJson){
   
    let rua = document.getElementById("rua")
    let bairro = document.getElementById("bairro")
    let cidade = document.getElementById("cidade")
    let estado = document.getElementById("estado")

    rua.value = ""
    bairro.value = ""
    cidade.value = ""
    estado.value = ""
}

