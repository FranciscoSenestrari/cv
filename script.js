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

function sketchfab(){

    var dir =['6215426f8e7f4d709c5b9fe52f55b4a9','ee54bc9e7eaushc4642a87c83162d09bd17','5d76971f8d02474786239b18e0a40a69','e6530d370c2f40f6aee65f43cf8e6776','832974f16d9840649a29512cf5498126']
    var iframe = document.getElementById( 'api-frame' );

        var uid = '6215426f8e7f4d709c5b9fe52f55b4a9';
        var client = null;

            document.addEventListener('load', () => console.log( 'viewerready' ))

            var client = new Sketchfab( iframe );

            client.init( uid, {
                success: function onSuccess( api ){
                    console.log( 'Success' );
                    api.load();
                    api.start();

                    api.addEventListener( 'viewerready', function() {
                        console.log( 'Viewer is ready' );
                        // once the viewer is ready, show the iframe
                        let $apiFrame = document.getElementById( 'api-frame' );
                        $apiFrame.classList.remove( 'hidden' ); // Remove hidden class
                    } );
                },
                error: function onError( callback ){
                    console.log( this.error );
                }
            } );
        

};

