"use strict";

function test()
{
    console.log("To jest funkcja");   
}

// funkcja anonimowa
var test1 = function()
{
    console.log('test1');
}

test1();

//Przekazywanie parametrów do funkcji


function dodaj(a, b, c=0)// Dodaliśmy wartość domyślną do parametru c
{
    var wynik = a+b+c;
    console.log(wynik);
}

//dodaj(a,b);
dodaj(4,2,9);


//Tak nie kodować !!!!!!!!
var wartosc1=1000;
var wartosc2=2000;

dodaj(wartosc1, wartosc2); //zapytac
/*

function dodaj1()
{
    //zwraca wynik
    var wynik1=wartosc1+wartosc2;
    return wynik1;
}
*/

//console.log(dodaj1());

function f1(imie,nazwisko)
{
    var argLength = arguments.length;
    console.log(argLength);
    if(argLength<2)
    {
        return "Brak wymaganych parametrów";    
    }
        var tekst = imie+ ' ' +nazwisko;
        return tekst; //return działa jak break
}

console.log(f1('Piotr'));













