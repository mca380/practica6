function Calcular() {/*Si és major o igual a 1 i no és un isNaN posar titol*/ 
    var nombre = document.getElementById('nombre').value;
    if(nombre>=1 && !isNaN (nombre)){
        $('#taulanombresprimers tr:last').after('<tr><th> Nombres primers fins al ' +nombre+ '</th><tr>');
        for (var i = 1; i <= nombre; i++) {
            if(esprimer(i)){/*Entra al bucle de la funció esprimer*/
                $('#taulanombresprimers tr:last').after('<tr><td>' + "<br>" +i+ '</td><td>' + '</td></tr>'); 
            }
        }
    } else {
        alert ("No has introduit un valor vàlid");
    }
} 
function esprimer (nombre) {/*Funció principal: treu el nombres primers*/
    for (var divisor=2; divisor<nombre; divisor++) {
        if (nombre%divisor ==0){
            return false;
        }
    }
    return true;
}          