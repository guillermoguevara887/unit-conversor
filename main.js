let num = document.getElementById("num");
const btn = document.getElementById("btn");
num.value = 0;

btn.addEventListener('click', function () {
    console.log(num.value);
    let feet = num.value * 3.281;
    let gallon = num.value * 0.264;
    let pound = num.value * 2.204;
})

