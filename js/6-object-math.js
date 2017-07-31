'use strict';
//alert();
//przykład stałej Math.PI

console.log(Math.PI);
console.log(Math.LN2);

console.log('-----------------------');
//ceil() - zwraca liczbe całkowitą większą lub równą podanej liczbie

console.log(Math.ceil(4.3));

console.log(Math.floor(4.3));
console.log(Math.ceil(4.3)-1);

//round() -zwraca zaokrąglenie zgodnie z zasadami matematyki
console.log(Math.round(4.4));

//random - zwraca wartosc pseudolosowa 0-1
console.log(Math.round((Math.random()*10)));


//Lotto
console.log("------Lotto-------");
for(var i = 0; i < 6; i++)
{
    console.log(Math.round((Math.random()*42)));
}

//Math.pow(2,3) - zwraca wartosc liczby 2 do potegi 3
console.log(Math.pow(2,3));

//losowanie np.zdjecia
var foto = ["Foto1", "Foto2", "Foto3", "Foto4"];

var wylosowana = foto[Math.round(Math.random()*(foto.length-1))];

console.log(wylosowana);

