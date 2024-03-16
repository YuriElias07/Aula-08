const imagem = document.querySelector("#imagem")
const grande = document.querySelector("#grande")
const medio = document.querySelector("#medio")
const pequeno = document.querySelector("#pequeno")
const arredondado = document.querySelector("#arredondado")
const circulo = document.querySelector("#circular")


grande.addEventListener("click", () =>{
    imagem.className = ""
    imagem.classList.add("grande")
})
medio.addEventListener("click", () =>{
    imagem.className = ""
    imagem.classList.add("medio")
})
pequeno.addEventListener("click", () =>{
    imagem.className = ""
    imagem.classList.add("pequeno")
})
arredondado.addEventListener("click", () =>{
    imagem.className = ""
    imagem.classList.add("arredondado")
})
circulo.addEventListener("click", () =>{
    imagem.className = ""
    imagem.classList.add("circulo")
})
