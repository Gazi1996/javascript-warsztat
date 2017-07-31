'user strict'

var wiek = 10;

if(wiek == 18)
{
    console.log("Właśnie uzyskałeś pełnoletność");
}

else if(wiek>18)
{
    console.log("Jesteś pełnoletni");
}

else
{
    console.log("Nie jesteś pełnoletni");
}


//przełącznik switch
var page = 'kontakt';


switch(page)
{
    case 'o-mnie':
    {
        console.log("Wyświetlam podstronę o-mnie");
        break;
    }
        
    case 'kontakt':
    {
        console.log('Wyświetlam podstronę kontakt');
        
    }
        
    case 'home':
    {
        console.log('Wyświetlam podstronę home');
        break;
    }
        
    default:
    {
        console.log("Nie odnaleziono strony");
    }
}












