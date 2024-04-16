//----------------------------Calculadora----------------------------

// Variables para mantener el estado de la calculadora
let numeroEnPantalla = '';
let operador = '';
let resultado = '';

// Función para limpiar la pantalla
function limpiar() {
    numeroEnPantalla = '';
    operador = '';
    resultado = '';
    actualizarPantalla();
}

// Función para agregar números a la pantalla
function agregarNumero(num) {
    numeroEnPantalla += num;
    actualizarPantalla();
}

// Función para agregar un decimal
function agregarDecimal() {
    if (!numeroEnPantalla.includes('.')) {
        numeroEnPantalla += '.';
        actualizarPantalla();
    }
}

// Función para agregar un operador
function agregarOperador(op) {
    if (numeroEnPantalla !== '') {
        operador = op;
        resultado = numeroEnPantalla;
        numeroEnPantalla = '';
        actualizarPantalla();
    }
}

// Función para realizar el cálculo
function calcular() {
    if (operador !== '' && numeroEnPantalla !== '') {
        let num1 = parseFloat(resultado);
        let num2 = parseFloat(numeroEnPantalla);
        switch (operador) {
            case '+':
                resultado = num1 + num2;
                break;
            case '-':
                resultado = num1 - num2;
                break;
            case '*':
                resultado = num1 * num2;
                break;
            case '/':
                resultado = num1 / num2;
                break;
        }
        numeroEnPantalla = resultado.toString();
        operador = '';
        actualizarPantalla();
    }
}

// Función para actualizar el contenido de la pantalla
function actualizarPantalla() {
      
      if (operador !== '' && numeroEnPantalla !== '') {
        
        document.getElementById('resultado').value = resultado + operador + numeroEnPantalla;//muestra el resultado
    } else {
       
        document.getElementById('resultado').value = numeroEnPantalla;
    }
}


//----------------------------Pestaña de Operaciones----------------------------
function toggleDescription(descriptionId) {
    var description = document.getElementById(descriptionId);
    if (description.classList.contains("show")) {
        description.classList.remove("show");
    } else {
        var descriptions = document.querySelectorAll(".description");
        descriptions.forEach(function (desc) {
            if (desc.id !== descriptionId) {
                desc.classList.remove("show");
            }
        });
        description.classList.add("show");
    }
}
