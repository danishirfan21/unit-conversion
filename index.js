/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const input = document.getElementById("unit");

const lengthText = document.getElementById("length-description");
const volumeText = document.getElementById("volume-description");
const massText = document.getElementById("mass-description");

function convertData() {
    
    const inputValue = parseInt(document.getElementById("unit").value);

    lengthText.innerText = `${inputValue} meters = ${(inputValue * 3.281).toFixed(3)} feet | ${inputValue} feet = ${(inputValue / 3.281).toFixed(3)} meters`;
    
    volumeText.innerText = `${inputValue} liters = ${(inputValue * 0.264).toFixed(3)} gallons | ${inputValue} gallons = ${(inputValue / 0.264).toFixed(3)} liters`;
    
    massText.innerText = `${inputValue} kilograms = ${(inputValue * 2.204).toFixed(3)} pounds | ${inputValue} pounds = ${(inputValue / 2.204).toFixed(3)} kilograms`;    
}

document.addEventListener("DOMContentLoaded", function() {
    convertData();
})

input.addEventListener("input", function () {
    const value = this.value.toString();
    const valueLength = value.length;
    const minWidth = 20;
    
    const dynamicWidth = Math.max(valueLength * 5, minWidth);

    this.style.width = dynamicWidth + "%";
});