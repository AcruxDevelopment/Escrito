const domNombre = document.getElementById("nombre");
const domCantidad = document.getElementById("cantidad");
const domTipo = document.getElementById("tipo");
const domCodigo = document.getElementById("codigo");
const domCalcular = document.getElementById("calcular");

const domErrorDiv = document.getElementById("error-div");
const domErrorText = document.getElementById("error-text");
const domCorrectoDiv = document.getElementById("correcto-div");
const domCorrectoText = document.getElementById("correcto-text");
const domMensajeDiv = document.getElementById("mensaje-div");
const domMensajeText = document.getElementById("mensaje-text");

function esconderMensajes()
{
    domErrorDiv.style.display = 'none';
    domCorrectoDiv.style.display = 'none';
    domMensajeDiv.style.display = 'none';
}

function mostrarError(mensaje)
{
    esconderMensajes();
    domErrorText.innerHTML = mensaje;
    domErrorDiv.style.display = 'flex';
}

function mostrarCorrecto(mensaje)
{
    esconderMensajes();
    domMensajeText.innerHTML = mensaje;
    domCorrectoDiv.style.display = 'flex';
    domMensajeDiv.style.display = 'flex';
}

domCalcular.addEventListener("click", (e) => {
    esconderMensajes();
    e.preventDefault();

    let nombre = domNombre.value;
    let cantidad = Number(domCantidad.value);
    let tipo = domTipo.value;
    let codigo = domCodigo.value;

    if(nombre.length < 2 || nombre.length > 20)
    {
        mostrarError("Ingrese nombre entre 2 y 20 caracteres.");
        return;
    }

    if(cantidad == NaN || cantidad <= 0)
    {
        mostrarError("Ingrese cantidad valida.");
        return;
    }

    if(codigo != "" && codigo != "ROCK10")
    {
        mostrarError("El codigo ingresado no existe.");
        return;
    }

    let precioBase = tipo == "general" ? 1000 :
        tipo == "vip" ? 2000 :
        tipo == "platino" ? 3000 : -1;
    if(precioBase == -1)
    {
        mostrarError("El tipo de entrada no es valida.");
        return;
    }

    let precioPorEntrada = codigo == "ROCK10" ? (precioBase - (precioBase * 0.1)) : precioBase;

    precioTotal = precioPorEntrada * cantidad;

    mostrarCorrecto(`Hola, ${nombre}. Pagaras $${precioTotal}.<br>Precio por entrada: $${precioPorEntrada}`);
});

esconderMensajes();