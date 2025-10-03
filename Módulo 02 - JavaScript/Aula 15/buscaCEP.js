//https://viacep.com.br/ws/COLOCAR CEP/json

const cep =document.getElementById("cep")

cep.addEventListener("change", (evento) => {
    let cepUsuario = evento.target 
    buscaCep(cepUsuario.value)
    
})

async function buscaCep(cepUsuario){ 

    let erroCep = document.getElementById("erro")
    erroCep.innerHTML = ""

    try {
        let consultaCEP = await fetch(`https://viacep.com.br/ws/${cepUsuario}/json`)

        let consultaCEPJson = await consultaCEP.json()
       
        if (consultaCEPJson.erro){
            throw Error ("CEP INEXISTENTE!!")
        }

        preencheCampos(consultaCEPJson)
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

