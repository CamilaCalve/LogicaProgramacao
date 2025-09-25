function calcular(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultado = document.querySelector("#resultado")

    let operacao = document.querySelector("#operacao").value;

    if (operacao == "+") {
        let soma = num1 + num2
        resultado.innerHTML = soma 
    } else if (operacao == "-") {
        let menos = num1 - num2
        resultado.innerHTML = menos
    } else if (operacao == "*") {
        let vezes = num1 * num2
        resultado.innerHTML = vezes
    } else if (operacao == "/") {
        if (num2 !== 0) {
            let divisao = num1 / num2
            resultado.innerHTML = divisao
        } else {
            resultado.innerHTML = "Erro: divisão por zero!"
        }
        
    }
} 
