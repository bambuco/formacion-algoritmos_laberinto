class util {

    /**
     *
     * @param {*} valor
     * @returns Bool false si el valor no es un número o es un número no entero.
     */
    static es_entero(valor) {

        if (!Number.isInteger(valor)) {
            var entero = Math.floor(Number(valor));
            return String(entero) === valor;
        } else {
            return true;
        }
    }

    /**
     * Esta función nos permite mostrarle un mensaje al usuario.
     *
     * @param {string} mensaje
     * @param {string} tipo Indica el tipo del mensaje, puede ser:
     *                      depuración, error, alerta o vacío por defecto.
     */
    static mensaje(mensaje, tipo) {
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
    static existe(arreglo, valor) {

        for (let i = 0; i < arreglo.length; i++) {
            let actual = arreglo[i]

            if (actual == valor) {
                return true;
            }
        }

        return false;
    }

}

