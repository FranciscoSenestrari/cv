
function tiempo(){ 
    var horas, minutos, segundos, a;
    var  Tiempo = new Date();
        horas = parsetime(Tiempo.getHours()) ;

        minutos = parsetime(Tiempo.getMinutes()) ;

        segundos = parsetime(Tiempo.getSeconds()) ;
        a = horas +":"+minutos+":"+ segundos;

        document.getElementById("time").innerHTML = a;
  
    
        
}
function parsetime(i)
{
    if ( i < 10) 
    {
       i = "0" + i;
    } 
    return i;
}
setInterval(tiempo, 1000);

function moveButton(){

};

