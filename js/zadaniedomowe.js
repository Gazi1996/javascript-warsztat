alert();
function Ksiazka(tytul, autor, przeczytana)
{
  this.tytul=tytul;
  this.autor=autor;
  this.przeczytana=przeczytana;
    
    this.showInfo = function()
    {
        console.log(this.tytul);
    }  
  
    this.opis=function()
    { 
        if(przeczytana==true)
        {
          console.log("Ksiazka ma tytuł "+this.tytul+", autorem jest"+this.autor+" i została przeczytana");
        }
        else
        {
          console.log("Ksiazka ma tytuł "+this.tytul+", autorem jest"+this.autor+", jeszcze nie przeczytana");
        }
    }
  
}
  
    var ksiazka1= new Ksiazka("Hrabia Monte Christo", "Aleksandra Dumasa", true);
    var ksiazka2=new Ksiazka("Zmierzch","Meyer Stephenie", false);
    var ksiazka3=new Ksiazka("Pan raczy żartować, panie Feynman!","Richard Phillips Feynman", true);
  
    var Biblioteka=[];
  
    Biblioteka[0]=ksiazka1;
    Biblioteka[1]=ksiazka2;
    Biblioteka[2]=ksiazka3;

    ksiazka1.opis();