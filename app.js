const form = document.querySelector("form");
const rgbButton = document.querySelector("#rgbBut");
const hexButton = document.querySelector("#hexBut");
const rgbResult = document.querySelector("#rgbText");
const hexResult = document.querySelector("#hexText");
const colorForm = document.querySelector("#color");

function hexToRgb(hex) {
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return r + "," + g + "," + b;
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
});

colorForm.addEventListener("change", function () {
    const hex = colorForm.value;
    const rgb = hexToRgb(hex.split("#")[1]);
    rgbResult.value = `rgb(${rgb})`;
    hexResult.value = `${hex}`;
});

rgbButton.addEventListener("click", function () {
    rgbResult.select();
    document.execCommand("copy");
    const tooltip = document.querySelector("#myTooltip1");
    tooltip.innerHTML = "Copied: " + rgbResult.value;
});

hexButton.addEventListener("click", function () {
    hexResult.select();
    document.execCommand("copy");
    const tooltip = document.querySelector("#myTooltip2");
    tooltip.innerHTML = "Copied: " + hexResult.value;
});
