let num = document.getElementById("num");
const btn = document.getElementById("btn");
let feet = document.getElementById("newFeet");
let galon = document.getElementById("newGallon");
let pound = document.getElementById("newPound");

num.value = 0;

btn.addEventListener('click', function () {
    console.log(num.value);
    let newFeet = (num.value * 3.281).toFixed(2);
    let newMeter = (num.value * 0.304).toFixed(2);
    let newGallon = (num.value * 0.264).toFixed(2);
    let newLiter = (num.value * 3.78541).toFixed(2);
    let newPound = (num.value * 2.204).toFixed(2);
    let newKilo = (num.value * 0.453592).toFixed(2)
    feet.textContent = `${num.value} meters = ${newFeet} feet | ${num.value} feet = ${newMeter} meters`;
    galon.textContent = `${num.value} liters = ${newGallon} gallons | ${num.value} gallons = ${newLiter} liters`;
    pound.textContent = `${num.value} kilos = ${newPound} pounds | ${num.value} pounds = ${newKilo} kilos`;

})

