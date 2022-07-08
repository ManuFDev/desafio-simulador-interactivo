// funcion de suma
const suma = (a, b) => a + b;
let flag = true;

// bucle que se encarga de pedir el precio a ingresar y que se encarga de validar que el precio sea un numero
while (flag) {
    var ingresarPrecio = precio();
    if (!isNaN(ingresarPrecio) && ingresarPrecio != "" && ingresarPrecio != null) {
        alert(`Ingresaste: $${ingresarPrecio} a continuacion selecciona la cantidad de cuotas en la que deseas abonar`);
        break;
    } else {
        alert("No ingresaste un numero");
        continue;
    }
}

// variable global
let elegirCuotas;

// bucle que se encarga de pedir la cantidad de cuotas a ingresar y que se encarga de validar que la cantidad de cuotas sea un numero entre 1, 3, 6, 9 o 12.
while (elegirCuotas != 1 && elegirCuotas != 3 && elegirCuotas != 6 && elegirCuotas != 9 && elegirCuotas != 12) {
    elegirCuotas = parseInt(prompt("Usted puede abonar el producto con su tarjeta de credito en 1 pago o 3, 6, 9 o 12 cuotas. Recuerde que abonando con tarjeta de credito tendra un recargo."));

    switch (elegirCuotas) {
        case 1:
            alert(`El precio final en 1 pago es de : $${suma(ingresarPrecio, (ingresarPrecio * 0.08))}`);
            alert("Muchas gracias por utilizar el simulador.");
            break;

        case 3:
            alert(`El precio final en 3 cuotas es de : $${suma(ingresarPrecio,(ingresarPrecio * 0.15))}`);
            alert("Muchas gracias por utilizar el simulador.");
            break;

        case 6:
            alert(`El precio final en 6 cuotas es de : $${suma(ingresarPrecio,(ingresarPrecio * 0.30))}`);
            alert("Muchas gracias por utilizar el simulador.");
            break;

        case 9:
            alert(`El precio final en 9 cuotas es de : $${suma(ingresarPrecio,(ingresarPrecio * 0.50))}`);
            alert("Muchas gracias por utilizar el simulador.");
            break;

        case 12:
            alert(`El precio final en 12 cuotas es de : $${suma(ingresarPrecio,(ingresarPrecio * 0.65))}`);
            alert("Muchas gracias por utilizar el simulador.");
            break;

        default:
            alert("No ingresaste un numero de cuotas valido.");
    }
}


    // funcion que se encarga de pedir el precio a ingresar
    function precio(precio) {
        return precio = parseFloat(prompt("Ingrese el precio del producto que desea abonar"));
    }
    
