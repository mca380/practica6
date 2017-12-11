function esprimer (numero)
for (var divisor=2; divisor<numero; divisor++) {
    if (numero%divisor ==0){
        return false;
    }
}
return true;
