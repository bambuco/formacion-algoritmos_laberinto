function main() {

    var lab;
    var ancho = 3;
    var alto = 3;

    try {
        var rutas = laberinto.aleatorio(ancho, alto);
        lab = new laberinto(rutas, [0, 0], [ancho - 1, alto - 1]);
        lab.imprimir_tablero('#tablero3');

        lab.buscar_salida();
    } catch (e) {
        console.log('El laberinto está mal construido, razón: ' + e.message);
    } finally {
        console.log('Terminó');
    }

}