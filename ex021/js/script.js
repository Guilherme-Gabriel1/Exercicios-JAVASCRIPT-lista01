var btnMais = document.querySelector("#mais")
var btnMenos = document.querySelector("#menos")
var res = document.querySelector("#res")
var contador = 0

function incremento(){
    contador ++
    res.innerText = contador
    limiter()
}

function decremento(){
    contador --
    res.innerText = contador
    limiter()
}

function limiter(){
    if(contador == 0){
        btnMenos.setAttribute("disabled", "")
    }

    else{
        btnMenos.removeAttribute("disabled", "")
        
    }
}
limiter()

btnMais.addEventListener("click", incremento)
btnMenos.addEventListener("click", decremento)

