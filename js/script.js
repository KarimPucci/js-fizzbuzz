console.log("ciao da karim");

/*Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.**Prima di partire a scrivere codice poniamoci qualche domanda:**Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?*/

//dichiaro le const

//DATA
const limit = 100;

//LOGIC
for(let i = 1; i <= limit; i++){
  if (i % 15 === 0) {
    console.log("Fizzbuzz");

  } else if (i % 3 === 0) {
    console.log("Fizz");

  } else if (i % 5 === 0) {
    console.log("Buzz");

  } else {
    console.log(i);
  }
}

//SHOW

  //box
  //const box = document.createElement("div");
  //agg. classe
  //box.className = "box";
