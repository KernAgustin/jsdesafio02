const IVA = 21
const descuento = 30

function productos(name, price, cantidad) {
    this.name = name;
    this.price = price;
    this.cantidad = cantidad
    this.precioIva = () => { return (this.price) + ((this.price * IVA) / 100) }
    this.precioDescuento = () => { return ((descuento * this.price) / 100) }
}

const maceta01 = new productos("Maceta01", 10000, "1")
console.log(maceta01.name);
console.log(maceta01.price);
console.log(maceta01.precioIva());
console.log(maceta01.cantidad);

const maceta02 = new productos("Maceta02", 9000, "1")
console.log(maceta02.name);
console.log(maceta02.price);
console.log(maceta02.precioIva());
console.log(maceta02.cantidad);
console.log(maceta02.precioIva());

const maceta03 = new productos("Maceta03", 8500, "1")
console.log(maceta03.name);
console.log(maceta03.price);
console.log(maceta03.precioIva());
console.log(maceta03.cantidad);


let maceta;
let MacetaInit;
const pregunta = "¿Desea el precio con IVA?";

alert("Bienvenido a Rococo Macetas!");

function macetas() {
    maceta = parseInt(prompt("Selecione una de las Siguientes Macetas:\n( 1 ) - Maceta01\n( 2 ) - Maceta02\n( 3 ) - Maceta03"));
    while (isNaN(maceta) || maceta > 3) {
        alert("No existe este Producto");
        maceta = parseInt(prompt("Selecione una de las Siguientes Macetas:\n( 1 ) - Maceta01\n( 2 ) - Maceta02\n( 3 ) - Maceta03"));
    }
    return maceta;
}

function select() {
    if (maceta == 1) {
        alert("Elegiste Maceta01");
        MacetaInit = parseInt(prompt(pregunta + "\n1 - SI\n2 - NO\n"));
        while (isNaN(MacetaInit) || MacetaInit > 2) {
            alert("Error!\nNumero Incorrecto");
            MacetaInit = parseInt(prompt(pregunta + "\n\n1 - SI\n2 - NO\n"));
        }
        return console.log();
    } else if (maceta == 2) {
        alert("Elegiste Maceta02");
        MacetaInit = parseInt(prompt(pregunta + "\n1 - SI\n2 - NO\n"));
        while (isNaN(MacetaInit) || MacetaInit > 2) {
            alert("Error!\nNumero Incorrecto");
            MacetaInit = parseInt(prompt(pregunta + "\n\n1 - SI\n2 - NO\n"));
        }
    } else if (maceta == 3) {
        alert("Elegiste Maceta03");
        MacetaInit = parseInt(prompt(pregunta + "\n1 - SI\n2 - NO\n"));
        while (isNaN(MacetaInit) || MacetaInit > 2) {
            alert("Error!\nNumero Incorrecto");
            MacetaInit = parseInt(prompt(pregunta + "\n\n1 - SI\n2 - NO\n"));
        }
    }
}

function resultado() {
    if (maceta == 1 && MacetaInit == 1) {
        costoIva = maceta01.precioIva()
        alert("Su Precio es $" + costoIva)

    } else if (maceta == 1 && MacetaInit == 2) {
        costoIva = maceta01.price
        alert("Su Precio es $" + costoIva)
    }
    if (maceta == 2 && MacetaInit == 1) {
        costoIva = maceta02.precioIva()
        alert("Su Precio es $" + costoIva)

    } else if (maceta == 2 && MacetaInit == 2) {
        costoIva = maceta02.price
        alert("Su Precio es $" + costoIva)
    }
    if (maceta == 3 && MacetaInit == 1) {
        costoIva = maceta03.precioIva()
        alert("Su Precio es $" + costoIva)

    } else if (maceta == 3 && MacetaInit == 2) {
        costoIva = maceta03.price
        alert("Su Precio es $" + costoIva)
    }
}
 
function init() {
    macetas();
    select();
    resultado();
}

init();