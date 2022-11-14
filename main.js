const inputName = document.getElementById("nameInput")
const nameCard = document.getElementById("nameCard")

const inputCvv = document.getElementById("cvvInput")
const cvvCard = document.getElementById("cvvCard")

const inputMonth = document.getElementById("mesInput")
const mmCard = document.getElementById("mmCard")

const inputYear = document.getElementById("anioInput")
const yyCard = document.getElementById("yyCard")

const inputNumber = document.getElementById("numberInput")
const numberCard = document.getElementById("numberCard")

const btnsubmit = document.getElementById("submit")

function events(card, input, value){
    input.addEventListener("keyup", (event) => {
        card.innerHTML = event.target.value
        if(input.value.length === 0){
            card.innerHTML = `${value}`
        }
    })
}

events(nameCard, inputName, "Menganito Perez")
events(cvvCard, inputCvv, "000")
events(mmCard, inputMonth, "00")
events(yyCard, inputYear, "00")

inputNumber.addEventListener("keyup", (event) =>{
    numberCard.innerHTML = `<p>${event.target.value.slice(0,4)}</p><p>${event.target.value.slice(4,8)}</p><p>${event.target.value.slice(8,12)}</p><p>${event.target.value.slice(12,16)}</p>`
    if(inputNumber.value.length === 0){
        numberCard.innerHTML = `<p>0000</p><p>0000</p><p>0000</p><p>0000</p>`
    }
})

function verifName(nameFull) {
    let validation = /^[a-zA-ZáéíóúÁÉÍÓÚ\s]{1,25}$/g;
    return validation.test(nameFull);
}

function verifNumber(number) {
    let validation = /^[0-9]{14,16}$/g;
    return validation.test(number);
}

function verifMonth(month) {
    let validation = /^(0[1-9]|1[0-2])$/g;
    return validation.test(month);
}

function verifYear(year) {
    let validation = /^(2[3-9]|3[0-9]|4[0-9])$/g;
    return validation.test(year);
}

function verifCvv(cvv) {
    let validation = /^[0-9]{3,4}$/g;
    return validation.test(cvv);
}

let btnSubmit = document.getElementById("submit")

btnSubmit.addEventListener("click", () =>{
    let cardValue = inputNumber.value
    if(!verifNumber(cardValue)){
        console.log("error")
    }
    console.log(verifNumber(cardValue))
})

