'use strict'
//alert();

/*//Pętla typu for od 1 do 10
for(var i=0;i<=10;i++)
{
    console.log(i);
}

for(var i=10; i>=1; i--)
{
    console.log(i);
}

//pętla while
var i=1;
while(i<=10)
{
    console.log("Przejście pętli nr: "+ i);
    i++;
}

//do while
var i=20;
do
{
    console.log("iterator ma teraz wartość: " +i)
}while(i<20);*/

//Przerwanie wykonywania pętli - break
for(var i=0;i<=10;i++)
{
    if(i===5){break;}
    console.log(i);
}

//kontynuacja wykonywania pętli - continue
for(var i=1;i<=10;i++)
{
    if(i%2 != 0){continue;}
    console.log(i);
}





