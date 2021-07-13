let amount = document.getElementById("amountDisplay")
let total = document.getElementById("totalDisplay")
let bill = document.getElementById("billInput")
let people = document.getElementById("peopleInput")

calc()
reset()
peopleNumber()
insertCustopTip()

function calc() { //calculate the tip by clicking at the buttons
    let btn = document.querySelectorAll("button")
    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', () => {
            let result = (bill.value * Number(event.target.value))/Number(people.value)
            amount.innerText = "$" + result.toFixed(2)

            total1 = (result + Number(bill.value))/Number(people.value)
            
            total.innerText = "$" + total1.toFixed(2)
        })
    }
}

function insertCustopTip(){ //calculate the by inserting a custom tip
    let customTip = document.getElementById("customTip")
    customTip.addEventListener('keypress',() => {
        tip = Number(event.target.value) * 0.01
        let result = (bill.value * tip)/Number(people.value)
        amount.innerText = "$" + result.toFixed(2)

        total1 = (result + Number(bill.value))/Number(people.value)
        total.innerText = "$" + total1.toFixed(2)
    })

    customTip.addEventListener('click',() => {
        tip = Number(event.target.value) * 0.01
        let result = (bill.value * tip)/Number(people.value)
        amount.innerText = "$" + result.toFixed(2)

        total1 = (result + Number(bill.value))/Number(people.value)
        total.innerText = "$" + total1.toFixed(2)
    })
}

function reset(){ //reset everything to default
    let reset = document.getElementById("resetBtn")
    reset.addEventListener('click', ()=>{
        total.innerText = "$0.00"
        amount.innerText = "$0.00"
        bill.value = ""
        people.value = ""
    })
}

function peopleNumber(){//don't let the user set the persons number to 0
    people.addEventListener('change',()=>{
        if(people.value < 1 | people.value == ""){
            people.value = 1
        }
    })
}

