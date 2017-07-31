"use strict";
//alert();


var bazaFirmy = 
{
    "pracownicy":
    [
        {"firstName": "Krystian", "lastName": "Dziopa"}, {"firstName": "Anna","lastName": "Szapiel"}, {"firstName": "Piotr", "lastName": "Żmuda"} 
    ],
    
    "dostawcy":
    [
        {"firstName": "Krystian", "lastName": "Dziopa"}, {"firstName": "Anna","lastName": "Szapiel"}, {"firstName": "Piotr", "lastName": "Żmuda"} 
    ]
};
    
bazaFirmy.pracownicy.forEach(function(e,i){
    console.log(e.firstName);
});

bazaFirmy.pracownicy.forEach
(
    function(workers,i)
    {
        var lp = i++;fjhdfhdrthtdyhnbgdhjgfjghjt
        console.log("Indeks: "+i+" ,imię: "+workers.firstName+
        " ,nazwisko: "+workers.lastName);
    }
);
