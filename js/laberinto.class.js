class laberinto {

    GIROS_CARDINAL = [
        ['derecha', 'dr', 'g-d', 'gd', 'oriente', 'este', '360°', '0°', '360', '0', '-360°', '-360'], // Valores reconocidos para un giro al oriente
        ['abajo', 'ab', 'sur', '270°', '270', '-90°', '-90'], // Valores reconocidos para un giro al sur
        ['izquierda', 'iz', 'g-i', 'gi', 'occidente', 'oeste', '180°', '180', '-180°', '-180'], // Valores reconocidos para un giro al occidente.
        ['arriba', 'ar', 'norte', '90°', '90', '-270°', '-270'] // Valores reconocidos para un giro al norte
    ];

    GIROS_GRADOS = [
        ['360°', '0°', '360', '0', '-360°', '-360'], // Valores reconocidos para un giro completo, queda en el mismo sentido.
        ['90°', '90', '-270°', '-270'],
        ['180°', '180', '-180°', '-180'],
        ['270°', '270', '-90°', '-90']
    ];

    GIROS_SENCILLO = [
        ['i', 'izquierda', 'iz', 'g-i', 'gi'], // Valores reconocidos para un giro a la izquierda.
        ['d', 'derecha', 'dr', 'g-d', 'gd'] // Valores reconocidos para un giro a la derecha
    ];

    GIROS = [];

    modo_giro;

    mapa;
    recorrido = null;

    inicio;
    fin;

    $tablero;
    $personaje;

    constructor (mapa, inicio = [0, 0], fin = [0, 0]) {
        var tmp_giros = this.GIROS_CARDINAL.concat(this.GIROS_GRADOS, this.GIROS_SENCILLO);

        for (var i = 0; i < tmp_giros.length; i++) {
            this.GIROS = this.GIROS.concat(tmp_giros[i]);
        }

        this.mapa = mapa;
        this.inicio = inicio;
        this.fin = fin;

        if (mapa.length < inicio[0] || mapa.length < fin[0] ||
            mapa[inicio[0]].length < inicio[1] || mapa[fin[0]].length < fin[1]) {

                throw new Error('Inicio o fin están por fuera del laberinto');
        }

    }

    imprimir_tablero (destino) {
        this.$tablero = $(destino);

        var $fila;
        for (var fila = 0; fila < this.mapa.length; fila++) {
            $fila = $('<div class="fila"></div>');
            for (var columna = 0; columna < this.mapa[0].length; columna++) {
                var $celda = $('<div class="casilla"></div>');
                $celda.html(fila + ' - ' + columna);

                $celda.attr('fila', fila);
                $celda.attr('columna', columna);

                if (this.mapa[fila][columna][0] == 1) {
                    $celda.addClass('linea_arriba');
                }

                if (this.mapa[fila][columna][1] == 1) {
                    $celda.addClass('linea_derecha');
                }

                if (this.mapa[fila][columna][2] == 1) {
                    $celda.addClass('linea_abajo');
                }

                if (this.mapa[fila][columna][3] == 1) {
                    $celda.addClass('linea_izquierda');
                }

                $fila.append($celda);
            }
            this.$tablero.append($fila);
        }

        this.$tablero.find('[fila="' + this.inicio[0] + '"][columna="' + this.inicio[1] + '"]').addClass('inicio');
        this.$tablero.find('[fila="' + this.fin[0] + '"][columna="' + this.fin[1] + '"]').addClass('final');

        this.$personaje = $('<img class="personaje" src="resources/cicla.png" />');
        this.pintar_personaje (this.inicio[0], this.inicio[1]);
    }

    /**
     * Pinta dentro del laberinto unas posiciones que determinan un recorrido.
     *
     * @param {array} recorrido
     * @returns bool False si el recorrido no se puede pintar por algún error.
     */
    pintar_recorrido (recorrido) {

        var es_girar;
        var actual;

        for (var posicion = 0; posicion < recorrido.length; posicion++) {

            actual = recorrido[posicion];

            es_girar = util.existe(this.GIROS, actual);

            if (es_girar) {
                //ToDo: hacer operaciones de girar
            } else {

                if (util.es_entero(actual)) {
                    //ToDo: calcular avance
                } else {
                    util.mensaje('El valor: ' + actual + ' es inválido', 'error');
                    return false;
                }
            }

            //La logica para pintar según el alfabeto.
        }

        return true;
    }

    /**
     *
     * @param {int} columna
     * @param {int} fila
     * @param {int} direccion 0 is front / horizontal positive.
     */
    pintar_personaje (columna, fila, direccion = 0) {
        var rotate = (direccion % 4) * 90;

        if (rotate == 180) {
            this.$personaje.css('transform', 'scaleX(-1)');
        } else {
            this.$personaje.css('transform', 'rotate(' + rotate + 'deg)');
        }

        if (!this.validar_posicion([columna, fila])) {
            this.$personaje.addClass('error');
        } else {
            this.$tablero.find('[fila="' + fila + '"][columna="' + columna + '"]').append(this.$personaje);
        }

    }

    /**
     *
     * @param {array[2]} posicion Es un arreglo con dos enteros que determinan una posición en el laberinto
     * @returns bool False si la posición no es válida para el laberinto
     */
    validar_posicion(posicion) {
        return posicion[0] < this.mapa.length &&
              posicion[1] < this.mapa[0].length &&
              posicion[0] >= 0 &&
              posicion[1] >= 0;
    }

    /**
     * Busca algorítmicamente una salida para el laberinto.
     *
     * @returns True Si encontró salida, false en otro caso.
     */
    buscar_salida() {
        return false;
    }

    static aleatorio(filas, columnas) {

        var matriz = [];
        var muroderecho;
        var muroabajo = [];
        var esmuro;

        for (var fila = 0; fila < filas; fila++) {
            matriz[fila] = [];
            muroderecho = 1;

            for (var columna = 0; columna < columnas; columna++) {
                matriz[fila][columna] = [];

                for (var celda = 0; celda < 4; celda++) {

                    if (celda == 3) {
                        matriz[fila][columna][celda] = muroderecho;
                    } else if (celda == 0) {
                        if (typeof muroabajo[columna] != 'undefined') {
                            matriz[fila][columna][celda] = muroabajo[columna];
                        } else {
                            matriz[fila][columna][celda] = 1;
                        }
                    } else {
                        esmuro = Math.random() > 0.7;
                        matriz[fila][columna][celda] = esmuro;
                    }

                }

                muroderecho = matriz[fila][columna][1];
                muroabajo[columna] = matriz[fila][columna][2];

                if (fila == (filas - 1)) {
                    matriz[fila][columna][2] = 1;
                }
            }

            matriz[fila][columnas - 1][1] = 1;
        }

        return matriz;
    }
}