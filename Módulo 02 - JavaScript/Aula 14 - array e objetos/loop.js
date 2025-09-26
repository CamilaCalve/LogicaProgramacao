for (let i = 0; i <= 10; i++){
    console.log(i); 
}

let listaProduto = ["Computador", "Notebook", "Teclado", "Mouse", "Fone"]

//percorrer array
for (let i = 0; i < listaProduto.length; i++ ){
    console.log(listaProduto[i]) ; 
    
}

//percorrer array - forEach
listaProduto.forEach((produto) => {
    console.log(produto);
})
