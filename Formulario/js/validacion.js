function validar() {

    var bandera = false;

    for (var i = 0; i < document.forms[0].length; i++) {
        var elemento = document.forms[0].elements[i];
        if (elemento.value.trim() == '') {
            bandera = true;
            elemento.classList.add('error');
            break;
        }
    }

    if (bandera == true) {

        alert('Llenar todos los campos');
        document.getElementById('p').classList.add('p');
        return false;

    } else {
        var fecha = validarFecha();
        var cedula = validarCedula();
        var correo = validarCorreo();
        if (fecha || cedula || correo) {
            return false;
        } else {
            return true;
        }

    }
}

function escribe(elemento) {
    elemento.classList.remove('error');
    document.getElementById('p').classList.remove('p');
}

function val_numero(string) {
    var out = '';
    var filtro = '1234567890';

    for (var i = 0; i < string.length; i++)
        if (filtro.indexOf(string.charAt(i)) != -1)
            out += string.charAt(i);

    return out;
}

function val_letra(string) {
    var out = '';
    var filtro = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ ';

    for (var i = 0; i < string.length; i++)
        if (filtro.indexOf(string.charAt(i)) != -1)
            out += string.charAt(i);

    return out;
}

function dos_valores(string) {
    var out = '';
    var array = string.split(' ');
    if (array.length == 1) {
        out += array[0];
    } else {
        out += array[0] + ' ' + array[1];
    }

    return out;
}

function validarFecha() {
    var array = document.getElementById('fec').value.split('/');
    var fecha = new Date(array[2], array[1], array[0]);
    if (array.length == 3 && fecha
        && array[0] == fecha.getDate()
        && array[1] == fecha.getMonth()
        && array[2] == fecha.getFullYear()) {
        return false;
    } else {
        document.getElementById('fec').classList.add('error');
        document.getElementById('f').classList.add('p');
        alert('Fecha mal ingresada, usar formato dd/mm/yyyy');
        return true;
    }
}

function validarCedula() {
    var x = document.getElementById("cedula").value
    var total = 0;
    var longitud = x.length;
    var longcheck = longitud - 1;
    if (longitud == 10) {
        for (i = 0; i < longcheck; i++) {
            if (i % 2 === 0) {
                var aux = x.charAt(i) * 2;
                if (aux >= 10) aux -= 9;
                total += aux;
            } else {
                total += parseInt(x.charAt(i));
            }
        }
        total = total % 10 != 0 ? 10 - total % 10 : 0;

        if (x.charAt(longitud - 1) == total) {

            return false;
        } else {
            document.getElementById('cedula').classList.add('error');
            document.getElementById('c').classList.add('p');
            alert("Su cedula no corresponde a Ecuador")
            return true;
        }
    } else {
        return false;
    }
}

function validarCorreo() {
    var array = document.getElementById('ema').value.split('@');

    if (array[0].length < 3) {
        document.getElementById('ema').classList.add('error');
        alert('Correo no válido')
        return true;
    } else {
        if (!(array[1] == 'ups.edu.ec') && !(array[1] == 'est.ups.edu.ec')) {
            document.getElementById('ema').classList.add('error');
            document.getElementById('e').classList.add('p');
            alert('Extensión invalida use ups.edu.ec o est.ups.edu.ec')
            return true;
        } else {
            return false;
        }

    }
}