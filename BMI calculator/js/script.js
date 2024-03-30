let weightInput = document.querySelector("#weight")
let weightVal = document.querySelector("#weight-val")

let heightInput = document.querySelector("#height")
let heightVal = document.querySelector("#height-val")

let result = document.querySelector("#result")
let category = document.querySelector("#category")



function calculate () {
    let weightInputValue = weightInput.value
    let heightInputValue = heightInput.value

    weightVal.innerHTML = weightInputValue + " Kg"
    heightVal.innerHTML = heightInputValue + " cm"
    
    let finalResult = (weightInputValue / (Math.pow(heightInputValue/100 , 2))).toFixed(1)
    result.innerHTML = finalResult
    
    if(finalResult < 18.5){
        result.style.color = "yellow"
        category.innerHTML = "underweight"
    }else if(18.5 <= finalResult && finalResult <= 24.9){
        result.style.color = "green"
        category.innerHTML = "normal weight"
    }else if(25 <= finalResult && finalResult <= 29.9) {
        result.style.color = "orange"
        category.innerHTML = "overweight"
    }else{
        result.style.color = "red"
        category.innerHTML = "obese"
    }
}

weightInput.addEventListener("input", calculate)
heightInput.addEventListener("input", calculate)
