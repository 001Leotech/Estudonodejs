const lista = [];

lista.push(8);
lista.push(7);
lista.push(5);
lista.push(3);
lista.push(2);
lista.push(4);
lista.push(7);

for (let i = 0; i < lista.length; i++) {
   const numero = lista[i];
   if ((numero % 2 === 0)) {
    console.log("o número " + numero + " é par")
   } else {
      console.log("o número " + numero + " é ímpar")
   }
  
   
    
}