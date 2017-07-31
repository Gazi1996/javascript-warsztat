"use strict"

//odczyt elementów

var imiona = ["Rafał", "Piotr", "Kamil"];
console.log(imiona[imiona.length-1]); //ostatni element

//dodawanie elementów do tablicy

imiona[3] = 'Marysia';
imiona[3]+="la";
imiona.push("Antek");
console.log(imiona);

//usuwanie elementów
imiona.pop();
console.log(imiona);

//dodawanie elementu na początek tablicy
imiona.unshift("Maniek","Paweł");
console.log(imiona);

//usuwanie pierwszego elementu tablicy
imiona.shift();
console.log(imiona);

//długość tablicy
console.log(imiona.length);

console.log(imiona.toString());


//przekształcanie elementów tablicy na tekst
console.log(imiona.join(""));

//odwrócenie kolejności elementów
console.log(imiona.reverse());

console.log(imiona.sort());

//pętle - przykład walidacji
var login="";
var pass="";

var errors=[];

if(login == "")
{
    errors.push("Uzupełnij pole login");
}

if(pass == "")
{
    errors.push("Uzupełnij pole hasło");
}

for(var i=0; i<errors.length; i++)
{
    console.log(errors[i]);
}


//Ta funkjca może przyjmować 2 parametry 1-element tablicy, 2-iterator
errors.forEach(function(element,j)
{
    console.log("Wartość j:"+j+"Błąd"+element);
});







