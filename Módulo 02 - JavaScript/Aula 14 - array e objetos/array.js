let listaTimes = ["Santos", "São Paulo", "Palmeiras", "Corinthias"]

//acessar um item do array
console.log(listaTimes[0]);
console.log(listaTimes[1]);
console.log(listaTimes[2]);
console.log(listaTimes[3]);

//adicionar itens em um array
listaTimes.push("Ponte Preta")
listaTimes.push("Flamengo")
console.log(listaTimes);

//verificar o tamanho da lista
console.log(listaTimes.length);

//adiconar um item na primeira posiçao
listaTimes.unshift("Fluminense")
listaTimes.unshift("Vasco")
console.log(listaTimes);

//remover um item no inicio do array 
listaTimes.shift()
console.log(listaTimes);

//remover o ultimo elemento do array 
listaTimes.pop()
console.log(listaTimes);

//encontrar a posiçao de um elemento
console.log(listaTimes.indexOf("Santos"));

let listaNomes = ["Marcos", "Diego", "Camila", "Matheus"]

listaNomes.splice(3,1) // Matheus foi removido
console.log(listaNomes);

//alterando itens
listaNomes.splice(1,1, "Robson", "Edivan")
console.log(listaNomes);

//adiconando itens
listaNomes.splice(2,0, "Gabriel", "Diogo")
console.log(listaNomes);









