var GD = 'derecha';
var GI = 'izquierda';
var GA = 'invertido';

var inicio = [0, 0];
var fin = [0, 9];

var laberinto = [
    // Primera fila
    [
        [1, 0, 1, 1],
        [1, 0, 0, 0],
        [1, 1, 1, 0],
        [1, 0, 0, 1],
        [1, 0, 1, 0],
        [1, 0, 1, 0],
        [1, 0, 0, 0],
        [1, 1, 0, 0],
        [1, 0, 1, 1],
        [1, 0, 1, 0],
        [1, 1, 0, 0]
    ],
    // Segunda fila
    [
        [1, 0, 0, 1],
        [0, 1, 1, 0],
        [1, 0, 0, 1],
        [0, 1, 1, 0],
        [1, 1, 0, 1],
        [1, 0, 0, 1],
        [0, 1, 1, 0],
        [0, 0, 1, 1],
        [1, 0, 1, 0],
        [1, 0, 1, 0],
        [0, 1, 1, 0]
    ],
    // Tercera fila
    [
        [0, 0, 1, 1],
        [1, 1, 0, 0],
        [0, 1, 0, 1],
        [1, 0, 0, 1],
        [0, 1, 0, 0],
        [0, 0, 1, 1],
        [1, 0, 1, 0],
        [1, 0, 1, 0],
        [1, 0, 1, 0],
        [1, 0, 1, 0],
        [1, 1, 0, 0]
    ],
    //  Cuarta fila
    [
        [1, 0, 0, 1],
        [0, 1, 1, 0],
        [0, 1, 0, 1],
        [0, 1, 0, 1],
        [0, 0, 1, 1],
        [1, 1, 0, 0],
        [1, 0, 0, 1],
        [1, 0, 1, 0],
        [1, 0, 0, 0],
        [1, 1, 1, 0],
        [0, 1, 0, 1]
    ],
    //  Quinta fila
    [
        [0, 0, 0, 1],
        [1, 0, 1, 0],
        [0, 1, 1, 0],
        [0, 1, 0, 1],
        [1, 1, 0, 1],
        [0, 1, 0, 1],
        [0, 1, 0, 1],
        [1, 0, 0, 1],
        [0, 1, 1, 0],
        [1, 0, 0, 1],
        [0, 1, 0, 0]
    ],
    //  Sexta fila
    [
        [0, 1, 0, 1],
        [1, 0, 1, 1],
        [1, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 0, 1],
        [0, 1, 0, 1],
        [0, 1, 0, 1],
        [0, 1, 1, 1],
        [1, 0, 0, 1],
        [0, 1, 1, 0],
        [0, 1, 0, 1]
    ],
    //  Septima fila
    [
        [0, 0, 1, 1],
        [1, 0, 1, 0],
        [0, 1, 1, 0],
        [1, 0, 0, 1],
        [0, 1, 1, 0],
        [0, 1, 0, 1],
        [0, 1, 0, 1],
        [1, 0, 0, 1],
        [0, 1, 1, 0],
        [1, 1, 0, 1],
        [0, 1, 0, 1]
    ],
    //  Octava fila
    [
        [1, 0, 0, 1],
        [1, 1, 0, 0],
        [1, 0, 0, 1],
        [0, 1, 1, 0],
        [1, 0, 0, 1],
        [0, 1, 1, 0],
        [0, 1, 0, 1],
        [0, 1, 0, 1],
        [1, 0, 0, 1],
        [0, 0, 1, 0],
        [0, 1, 1, 0]
    ],
    //  Novena fila
    [
        [0, 1, 0, 1],
        [0, 1, 0, 1],
        [0, 0, 1, 1],
        [1, 0, 1, 0],
        [0, 0, 0, 0],
        [1, 0, 1, 0],
        [0, 1, 1, 0],
        [0, 1, 0, 1],
        [0, 0, 1, 1],
        [1, 1, 0, 0],
        [1, 1, 0, 1]
    ],
    //  Decima fila
    [
        [0, 1, 1, 0],
        [0, 1, 0, 1],
        [1, 0, 0, 1],
        [1, 1, 0, 0],
        [0, 1, 1, 1],
        [1, 0, 0, 1],
        [1, 1, 0, 0],
        [0, 0, 1, 1],
        [1, 1, 0, 0],
        [0, 1, 0, 1],
        [0, 1, 0, 1]
    ],
    //  Onceava fila
    [
        [1, 0, 1, 1],
        [0, 0, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 1, 1],
        [1, 0, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 1, 1],
        [1, 0, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 1, 1],
        [0, 1, 1, 0]
    ]
];

var recorrido = [
    '2', '270°', '1', '270°', '1', '90°', '1', '90°', '1', '270°', '1', '270°', '1', '90°', '1', '90°', '2', '90°', '3', '270°', '1', '90°', '1', '270°', '3', '270°', '1', '270°', '1', '90°', '1', '90°', '5', '270°', '2', '270°', '1', '90°', '1', '270°', '1', '90°', '1', '270°', '1', '90°', '3', '90°', '1', '270°', '1', '270°', '2', '270°', '1', '90°', '1', '90°', '1', '270°', '2', '270°', '1', '90°', '1', '90°', '1', '270°', '1', '270°', '3', '90°', '1', '90°', '2', '270°', '1'
];

function imprimir_tablero () {
    var $tablero = $('#tablero');

    for (var columna = 0; columna < 11; columna++) {
        for (var fila = 0; fila < 11; fila++) {
            var $celda = $('<div class="casilla"></div>');
            $celda.html(columna + ' - ' + fila);

            $celda.attr('fila', fila);
            $celda.attr('columna', columna);

            if (laberinto[columna][fila][0] == 1) {
                $celda.addClass('linea_arriba');
            }

            if (laberinto[columna][fila][1] == 1) {
                $celda.addClass('linea_derecha');
            }

            if (laberinto[columna][fila][2] == 1) {
                $celda.addClass('linea_abajo');
            }

            if (laberinto[columna][fila][3] == 1) {
                $celda.addClass('linea_izquierda');
            }

            $tablero.append($celda);
        }
    }

    $('#tablero [fila="' + inicio[0] + '"][columna="' + inicio[1] + '"]').addClass('inicio');
    $('#tablero [fila="' + fin[0] + '"][columna="' + fin[1] + '"]').addClass('final');
}

function pintar_recorrido (recorrido) {

    for (var posicion = 0; posicion < recorrido.length; posicion++) {
        //La logica para pintar según el alfabeto.
    }
}

function iniciar() {
    imprimir_tablero();

    pintar_recorrido(recorrido);
}