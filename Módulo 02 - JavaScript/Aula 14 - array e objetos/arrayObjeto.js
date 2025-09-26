//Objeto dentro de um arry
let listaProdutos = [
    {nome: "Computador", fabricante: "Dell", valor: 5000},
    {nome: "Notebook", fabricante: "Acer", valor: 3000},
    {nome: "Monitor", fabricante: "LG", valor: 900},
    {nome: "Teclado", fabricante: "Regragon", valor: 200}, 
]

//Percorrer pela array
listaProdutos.forEach((produto) => {
    console.log(`O ${produto.nome} da ${produto.fabricante} é de R$ ${produto.valor}`);
})

//Filtrar 
let listaProdutosCaros = listaProdutos.filter(produto => produto.valor > 1000)
console.log(listaProdutosCaros);
