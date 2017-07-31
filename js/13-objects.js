"use strict";
//alert();    

var person = 
{
    name: "Rafał",
    surname: "Gazda",
    wzrost: 186,
    print: function()
    {
        console.log("Witaj "+ this.name);
    }
}

person.print();

//dodawanie pól
person.age = 20;

console.log(person.age);

//nadpisywanie wartości pól
person.surname="Nowakowski";
console.log(person.surname); 

//klasa - wzorzec obiektu
function Person(name,surname)
{
    this.name = name;
    this.surname = surname;
    this.showInfo = function()
    {
        console.log(this.name);
    }
}

//tworzymy instancję klasy Person - tworzę obiekt na podstawie wzorca
var person1=new Person("Rafał", "Gazda");
person1.showInfo();

var person2=new Person("Ania","Nowak");
person2.showInfo();


