const numero = document.MediaQueryList("#numeroUsuario")
const btnTabuada = document.querySelector("#btnTabuada")
const resultado = document.querySelector("#res")

function resultadoCalculo() {
    resultado.innerHTML = ``
    var numeroConvertido = Number(numero.value)

    var inicial = 1
    while(inicial <= 10){

        resultado.innerHTML += `<p>${numeroConvertido} X ${inicial} = ${numeroConvertido * inicial}</p>`

        inicial ++
    }

}

btnTabuada.addEventListener("click", resultadoCalculo)