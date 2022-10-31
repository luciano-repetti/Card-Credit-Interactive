let inputName = document.getElementById("nameInput")
let nameCard = document.getElementById("nameCard")

inputName.addEventListener("keyup", (event) =>{
    nameCard.innerHTML = event.target.value
    if(nameInput.value.length === 0){
        nameCard.innerHTML = "Menganito Perez"
    }
})

let inputCvv = document.getElementById("cvvInput")
let cvvCard = document.getElementById("cvvCard")

inputCvv.addEventListener("keyup", (event) =>{
    cvvCard.innerHTML = event.target.value
    if(inputCvv.value.length === 0){
        cvvCard.innerHTML = "000"
    }
})

let mmCard = document.getElementById("mmCard")
let inputMes = document.getElementById("mesInput")

inputMes.addEventListener("keyup", (event) =>{
    mmCard.innerHTML = event.target.value
    if(inputMes.value.length === 0){
        mmCard.innerHTML = "00"
    }
})

let yyCard = document.getElementById("yyCard")
let inputAnio = document.getElementById("anioInput")

inputAnio.addEventListener("keyup", (event) =>{
    yyCard.innerHTML = event.target.value
    if(inputAnio.value.length === 0){
        yyCard.innerHTML = "00"
    }
})

let numberCard = document.getElementById("numberCard")
let inputNumber = document.getElementById("numberInput")

inputNumber.addEventListener("keyup", (event) =>{
    numberCard.innerHTML = `<p>${event.target.value.slice(0,4)}</p><p>${event.target.value.slice(4,8)}</p><p>${event.target.value.slice(8,12)}</p><p>${event.target.value.slice(12,16)}</p>`
    if(inputNumber.value.length === 0){
        numberCard.innerHTML = `<p>0000</p><p>0000</p><p>0000</p><p>0000</p>`
    }
})