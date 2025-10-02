let listaAlunos = []

function Cadastrar() {
    const nome = document.getElementById("nome").value;
    const nota = parseFloat(document.getElementById("nota").value);

    if (nome === "" || isNaN(nota)) {
        alert("Por favor, preencha nome e nota corretamente.");
        return;
    }

    let alunos = {
        "nome": nome,
        "nota": nota
    }

    listaAlunos.push({ nome, nota });

    MostrarAlunos(listaAlunos)
    
}

// Essa função serve pro parametro LISTA 
function MostrarAlunos(lista) {
    const listaHTML = document.getElementById("lista");
    listaHTML.innerHTML = ''
    lista.forEach(alunos => {
        
        let paragrafo = document.createElement("p")

        if (alunos.nota >= 7) {
            paragrafo.className  = "corAprovado"
            paragrafo.innerHTML = alunos.nome + "-->" + alunos.nota + " (Aprovado)";
        } else if (alunos.nota < 7) {
            paragrafo.className  = "corReprovado"
            paragrafo.innerHTML = alunos.nome + "-->" + alunos.nota + " (Reprovado)";
        }

        listaHTML.appendChild(paragrafo)
    });

}

// Nessas funções, nos chamamos a função "MostraAlunos" que esta com o parâmetro LISTA 
function MostrarAprovados() {
    let alunosAprovados = listaAlunos.filter(alunos => alunos.nota >= 7)
    MostrarAlunos(alunosAprovados) 
}

function MostrarReprovados() {
    let alunosReprovados = listaAlunos.filter(alunos => alunos.nota < 7)
    MostrarAlunos(alunosReprovados) 
}

function MostrarTodos(){
    MostrarAlunos(listaAlunos)
}