'use strict';
//alert();

/*typ liczbowy*/

var wyplata = 5000;
var premia = 2500;
var podatek = 0.2;

var calkowitawyplata;
var wyplatanetto;

var liczba = 5.5;
console.log(typeof(liczba));
console.log(typeof(wyplata));


calkowitawyplata = wyplata + premia;
//wyplatanetto = calkowitawyplata - calkowitawyplata*podatek;


console.log(calkowitawyplata);
//console.log(wyplatanetto);

/*
if(wyplatanetto>5000)
    {
        console.log("Super");
    }
*/


/*typ łańcuchowy - napis*/

var wyplata1 = "5000";
var premia1 = "2500";
var calkowitawyplata1;
calkowitawyplata1 = parseInt(wyplata1) + parseInt(premia1);

calkowitawyplata1 = (wyplata1) + (premia1);
console.log(calkowitawyplata1);

var ksiazka = ' "Pan \n Tadeusz" ';
console.log(ksiazka);

//Przykładowa metoda typ string
var login = "           ";
var sprlogin= login.trim();

console.log(sprlogin);

if(sprlogin === '')
{
    console.log('Uzupełnij pole login')    
}

/*Parsowanie stringów */

calkowitawyplata1 = parseInt(wyplata1) + parseInt(premia1);
console.log(calkowitawyplata1);

//typ logiczny -bool true|false;

var czyJestSmog;
czyJestSmog = true;

if(czyJestSmog) //To samo co czyJestSmog===true
{
     console.log("W Krakowie mamy smog");  
}
else
{
    console.log("W Krakowie nie mamy smogu");
}

//typy specjalne
var niezdefiniowanaZmienna;
var niezdefiniowanaZmienna = null;

console.log(niezdefiniowanaZmienna);

//przyklad z zastosowaniem null
var element = document.getElementById('div1');

if(element !== null)
{
    console.log('jest element');
}
else
{
    console.log('nie ma elementu');
}















