"use strict";
//alert();

var employees =
[ 
    {"firstName": "John", "lastName": "Doe"}, 
    {"firstName": "Anna", "lastName": "Smith"}, 
    {"firstName": "Peter", "lastName": "Jones"} 
];

console.log(employees[0].firstName);

//wyświetlenie wszystkich imion pracowników

employees.forEach(function(e,i)
{
    console.log("Twoje imię to: "+e.firstName+" Twoje nazwisko to: "+e.lastName);
});



