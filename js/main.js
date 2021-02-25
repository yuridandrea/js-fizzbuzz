// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i
//  multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per?
// Abbiamo visto qualcosa di particolare che possiamo usare?
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire 
// cosa vogliamo fare
// 2. proviamo ad immaginare le operazioni che vogliamo far 
// svolgere al nostro programma così come lo faremmo "a mano"


// inizializzo array con 100 numeri
var num = [];

for (var i = 0; i < 100; i++) {
  num[i] = i + 1;

  
  // multipli di 5 e 3   
  if (num[i] % 5 == 0 && num[i] % 3 == 0) {
    console.log(num[i] = "FizzBuzz");
  }
  // multipli di 5 
  else if (num[i] % 5 == 0) {
    console.log(num[i] = "Buzz");
  }
  // multipli di 3
  else if (num[i] % 3 == 0 ) {
    console.log(num[i] = "Fizz");
  } 
  // stampo tutti gli altri 
  else {
    console.log(num[i]);
  }
}

