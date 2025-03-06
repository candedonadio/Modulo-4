const numero = parseInt(prompt("Ingresa un número"));

function transportes() {
    if (numero < 1000) {
        document.write("Te estás transportando a pie");
    }
    else if (numero >= 1000 && numero < 3000) {
        document.write("Te estás transportando en bicicleta");
    }
    else if (numero >= 3000 && numero < 10000) {
        document.write("Te estás transportando en colectivo");
    }
    else if (numero >= 10000 && numero < 100000) {
        document.write("Te estás transportando en auto");
    }
    else if (numero >= 100000) {
        document.write("Te estás transportando en avión");
    }
}

transportes();

