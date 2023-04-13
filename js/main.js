function main() {

    var lab;
    var lab2;
    var lab3;

    try {
        lab = new laberinto([[[1, 1, 1, 1]]], [0, 0], [0, 9]);
        lab.imprimir_tablero('#tablero1');
    } catch (e) {
        console.log('El laberinto lab está mal construido, razón: ' + e.message);
    } finally {
        console.log('Terminó lab');
    }

    try {
        lab2 = new laberinto([[[1, 1, 1, 1]]]);
        lab2.imprimir_tablero('#tablero2');
    } catch (e) {
        console.log('El laberinto lab2 está mal construido, razón: ' + e.message);
    } finally {
        console.log('Terminó lab2');
    }

    try {
        lab3 = new laberinto([[[1, 0, 1, 1], [1, 1, 1, 0]]], [0, 0], [0, 1]);
        lab3.imprimir_tablero('#tablero3');
    } catch (e) {
        console.log('El laberinto lab3 está mal construido, razón: ' + e.message);
    } finally {
        console.log('Terminó lab3');
    }

}