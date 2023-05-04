let clientesTrybeBank = ['Ada', 'John', 'Gus'];

// escreva aqui sua função
function adcionaclientes(cliente){
    if(typeof cliente === "string"){
      clientesTrybeBank.push(cliente);
      return "cliente adicionado"
      } else {
      return "erro, não é um valor string"
      };
}

console.log(adcionaclientes(true));
console.log(adcionaclientes("danilo"));
console.log(clientesTrybeBank);