var GIROS_CARDINAL = [
    ['derecha', 'dr', 'g-d', 'gd', 'oriente', 'este', '360°', '0°', '360', '0', '-360°', '-360'], // Valores reconocidos para un giro al oriente
    ['abajo', 'ab', 'sur', '270°', '270', '-90°', '-90'], // Valores reconocidos para un giro al sur
    ['izquierda', 'iz', 'g-i', 'gi', 'occidente', 'oeste', '180°', '180', '-180°', '-180'], // Valores reconocidos para un giro al occidente.
    ['arriba', 'ar', 'norte', '90°', '90', '-270°', '-270'] // Valores reconocidos para un giro al norte
];

var GIROS_GRADOS = [
    ['360°', '0°', '360', '0', '-360°', '-360'], // Valores reconocidos para un giro completo, queda en el mismo sentido.
    ['90°', '90', '-270°', '-270'],
    ['180°', '180', '-180°', '-180'],
    ['270°', '270', '-90°', '-90']
];

var GIROS_SENCILLO = [
    ['i', 'izquierda', 'iz', 'g-i', 'gi'], // Valores reconocidos para un giro a la izquierda.
    ['d', 'derecha', 'dr', 'g-d', 'gd'] // Valores reconocidos para un giro a la derecha
];

var GIROS = [];

var tmp_giros = GIROS_CARDINAL.concat(GIROS_GRADOS, GIROS_SENCILLO);

for (var i = 0; i < tmp_giros.length; i++) {
    GIROS = GIROS.concat(tmp_giros[i]);
}

var inicio = [0, 0];
var fin = [0, 9];

// Modos de giro: cardinal (4 puntos cardinales), sencillo (izquierda o derecha), grados (90°, 180°, 270°).

var modo_giro;

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

var recorrido = null;

function imprimir_tablero () {
    var $tablero = $('#tablero');

    for (var fila = 0; fila < laberinto.length; fila++) {
        for (var columna = 0; columna < laberinto[0].length; columna++) {
            var $celda = $('<div class="casilla"></div>');
            $celda.html(columna + ' - ' + fila);

            $celda.attr('fila', fila);
            $celda.attr('columna', columna);

            if (laberinto[fila][columna][0] == 1) {
                $celda.addClass('linea_arriba');
            }

            if (laberinto[fila][columna][1] == 1) {
                $celda.addClass('linea_derecha');
            }

            if (laberinto[fila][columna][2] == 1) {
                $celda.addClass('linea_abajo');
            }

            if (laberinto[fila][columna][3] == 1) {
                $celda.addClass('linea_izquierda');
            }

            $tablero.append($celda);
        }
    }

    $('#tablero [fila="' + inicio[1] + '"][columna="' + inicio[0] + '"]').addClass('inicio');
    $('#tablero [fila="' + fin[1] + '"][columna="' + fin[0] + '"]').addClass('final');
}

/**
 * Pinta dentro del laberinto unas posiciones que determinan un recorrido.
 *
 * @param {array} recorrido
 * @returns bool False si el recorrido no se puede pintar por algún error.
 */
function pintar_recorrido (recorrido) {

    var es_girar;
    var actual;

    for (var posicion = 0; posicion < recorrido.length; posicion++) {

        actual = recorrido[posicion];

        es_girar = existe(GIROS, actual);

        if (es_girar) {
            //ToDo: hacer operaciones de girar
        } else {

            if (es_entero(actual)) {
                //ToDo: calcular avance
            } else {
                mensaje('El valor: ' + actual + ' es inválido', 'error');
                return false;
            }
        }

        //La logica para pintar según el alfabeto.
    }
}

function pintar_personaje (columna, fila, direccion) {
    var $personaje = $('#personaje');
    var rotate = (direccion % 4) * 90;

    if (rotate == 180) {
        $personaje.css('transform', 'scaleX(-1)');
    } else {
        $personaje.css('transform', 'rotate(' + rotate + 'deg)');
    }

    if (!validar_posicion([columna, fila])) {
        $personaje.addClass('error');
        $('#escenario').append($personaje);
    } else {
        $('#tablero [fila="' + fila + '"][columna="' + columna + '"]').append($personaje);
    }

}

/**
 *
 * @param {array[2]} posicion Es un arreglo con dos enteros que determinan una posición en el laberinto
 * @returns bool False si la posición no es válida para el laberinto
 */
function validar_posicion(posicion) {
    //ToDo: calcular si puede avanzar.
    return true;
}

/**
 *
 * @param {array[2]} posicion_actual Es un arreglo con dos enteros que determinan una posición en el laberinto
 * @param {int} direccion Dirección actual según la representación general.
 * @param {int} paso Indica el siguiente paso en el arreglo de recorrido.
 * @returns array[2] devuelve un arreglo de posición con el lugar donde debe quedar el personaje en el siquiente paso.
 */
function calcular_siguiente(posicion_actual, direccion, paso) {

    // Si es en fila es par si es en columna es impar.
    // Pero las columnas son la posición 0 del arreglo y las filas la posición impar
    // entonces toca sumar 1 para que se invierta el sentido con la posición en el arreglo.
    var sentido = direccion % 2;

    // Una orientación menor que 2 es adelante o abajo entonces avanza,
    // mayor o igual a 2 es derecha o arriba entonces retrocede.
    var orientacion = direccion < 2 ? 1 : -1;

    posicion_actual[sentido] = posicion_actual[sentido] + (paso * orientacion);

    //ToDo: calcular siguiente posición.
    return posicion_actual;
}

function inicializar_funciones() {
    var posicion = [-1, 0];
    var paso = 0;
    var direccion = 0;

    $('#siguiente').on('click', function() {

        // Validar si ya se definió el recorrido, sino, no se calcula el siguiente.
        if (!recorrido || !Array.isArray(recorrido)) {
            mensaje('Debe definir el recorrido');
            return;
        } 

        var valor = recorrido[paso];
        var es_girar = existe(GIROS, valor);

        if (es_girar) {
            direccion = nueva_direccion(direccion, valor);
            pintar_personaje(posicion[0], posicion[1], direccion);
            paso++;
        } else {

            if (es_entero(valor)) {
                valor = Number(valor); // Para estar seguros que es un número no el texto de un.
                var nueva_posicion = calcular_siguiente(posicion, direccion, valor);
                var puede = validar_posicion(nueva_posicion);

                if (puede) {
                    posicion = nueva_posicion;
                    paso++;
                    pintar_personaje(posicion[0], posicion[1], direccion);

                    if (fin[0] == nueva_posicion[0] && fin[1] == nueva_posicion[1]) {
                        mensaje('Felicitaciones, llegó al final');
                        $('#siguiente').prop('disabled', true);
                    }
                } else {
                    $('#siguiente').prop('disabled', true);
                    pintar_personaje(-1, -1, 0);
                    mensaje('No puede seguir, se chocó contra un muro', 'error');
                }
            } else {
                mensaje('El valor: ' + valor + ' es inválido', 'error');
                return false;
            }
        }

    });

    // Convierte todos los elementos con clase "dialog" en una venta modal.
    $(".dialog").dialog({
        autoOpen: false,
        modal: true
    });

    $("#abrir")
        .button()
        .click(function () {            
            $('#dialog_config').dialog("open");
        }
    );
        
    $('#deficion_recorrido').on('click', function definicion_recorrido() {

        var desplazamiento = $('textarea#recorrido').val().trim();

        if (!desplazamiento) {
            mensaje('El recorrido no puede estar vacío');
            return;
        }

        desplazamiento = desplazamiento.replace(/\n/g, ",");
        modo_giro = $('input[name="desplazamiento"]:checked').val();
        recorrido = desplazamiento.split(',');

        $('#vista_modo_giro').html(modo_giro);
        $('#vista_recorrido').html(desplazamiento);
        $('#dialog_config').dialog("close");

    });

}

function nueva_direccion(actual, cambio) {

    switch (modo_giro) {
        case 'cardinal':
            for (var k = 0; k < GIROS_CARDINAL.length; k++) {
                if (existe(GIROS_CARDINAL[k], cambio)) {
                    return k;
                }
            }
        break;
        case 'sencillo':
            for (var k = 0; k < GIROS_SENCILLO.length; k++) {
                if (existe(GIROS_SENCILLO[k], cambio)) {
                    var nueva = actual + (k * 2) - 1;
                    return nueva % 4;
                }
            }
        break;
        case 'grados':
            for (var k = 0; k < GIROS_GRADOS.length; k++) {
                if (existe(GIROS_GRADOS[k], cambio)) {
                    var nueva = actual + (4 - k);
                    console.log('nueva: ' + nueva);
                    return nueva % 4;
                }
            }
        break;
    }

    return actual;
}

/**
 * Esta función nos permite mostrarle un mensaje al usuario.
 *
 * @param {string} mensaje
 * @param {string} tipo Indica el tipo del mensaje, puede ser:
 *                      depuración, error, alerta o vacío por defecto.
 */
function mensaje(mensaje, tipo) {
    //ToDo: Hacer el mensaje más bonito y funcional, considerando el tipo del error.
    alert(mensaje);
}

/**
 * Determina si un valor se encuentra presente en los valores de un arreglo.
 *
 * @param {array} arreglo El arreglo donde se va a buscar.
 * @param {*} valor El valor a encontrar.
 * @returns True si se encuentra el valor dentro del arreglo, false en otro caso.
 */
function existe(arreglo, valor) {
    //ToDo: definir si valor está en alguna posición del arreglo.
    return false;
}

/**
 *
 * @param {*} valor
 * @returns Bool false si el valor no es un número o es un número no entero.
 */
function es_entero(valor) {
    //ToDo: definir si valor es un número y además es entero.
    return true;
}



function iniciar() {

    //ToDo: preguntar al usuario qué tipo de giros utiliza, si son de los 4 puntos cardinales
    // o si son solamente los dos movimientos básicos (izquierda - derecha).

    //ToDo: Poner un campo de texto para ingresar el recorrido, con valores separados por coma.

    inicializar_funciones();

    imprimir_tablero();

    //pintar_personaje(0, 0, 0);
//    pintar_recorrido(recorrido);
}