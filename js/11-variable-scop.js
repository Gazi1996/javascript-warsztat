'use strict';
//zmienna o dostępie globalnym wartosc1
var wartosc1=1000;
var wartosc2=2000;

function dodaj1()
{
    var wynik1 =wartosc1+200;
    return wynik1;
}

console.log(dodaj1());
console.log(wartosc1);

//zmienna lokalna - uwaga ! dostępna tylko w ciele funkcji

var surname;
function showSurname()
{
    var surname = "Gazda";
    console.log(surname);
}

showSurname();
console.log(surname);

//zmienna globalna zdefiniowana w ciele funkcji
var age;
function showAge()
{
    age = 40;
}

showAge();
console.log(age);

