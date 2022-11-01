let inputName = document.getElementById("nameInput")
let nameCard = document.getElementById("nameCard")

let inputCvv = document.getElementById("cvvInput")
let cvvCard = document.getElementById("cvvCard")

let mmCard = document.getElementById("mmCard")
let inputMes = document.getElementById("mesInput")

let yyCard = document.getElementById("yyCard")
let inputAnio = document.getElementById("anioInput")

function events(card, input, value){
    var inputName = document.getElementById(input)
    var nameCard = document.getElementById(card)
    inputName.addEventListener("keyup", (event) => {
        nameCard.innerHTML = event.target.value
        if(inputName.value.length === 0){
            nameCard.innerHTML = `${value}`
        }
    })
}

events("nameCard", "nameInput", "Menganito Perez")

events(cvvCard, inputCvv, "000")

events(mmCard, inputMes, "00")

events(yyCard, inputAnio, "00")

let numberCard = document.getElementById("numberCard")
let inputNumber = document.getElementById("numberInput")

inputNumber.addEventListener("keyup", (event) =>{
    numberCard.innerHTML = `<p>${event.target.value.slice(0,4)}</p><p>${event.target.value.slice(4,8)}</p><p>${event.target.value.slice(8,12)}</p><p>${event.target.value.slice(12,16)}</p>`
    if(inputNumber.value.length === 0){
        numberCard.innerHTML = `<p>0000</p><p>0000</p><p>0000</p><p>0000</p>`
    }
})