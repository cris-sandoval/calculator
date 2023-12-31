const displayValorAnterior = document.getElementById('valor-anterior')
const displayValorActual = document.getElementById('valor-actual')
const botonesOperadores = document.querySelectorAll('.operador')
const botonesNumeros = document.querySelectorAll('.numero')

const display = new Display(displayValorAnterior, displayValorActual)

botonesNumeros.forEach(boton => {
    boton.addEventListener('click',() =>  display.agregarNumero(boton.innerHTML))
})

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', ()=>display.computar(boton.value) )
})