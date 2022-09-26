function start() {
    var buttoncalculateImc = document.querySelector('#Button-calculate-IMC');
    buttoncalculateImc.addEventListener('click', handButtonClick);

    var inputWeight = document.querySelector('#input-weight');
    var inputHeight = document.querySelector('#input-height');

    inputWeight.addEventListener('input', handButtonClick)
    inputHeight.addEventListener('input', handButtonClick)

    handButtonClick();
}

function calculateImc(weight, height) {
    return weight / (height * height);
}
function handButtonClick() {
    var inputWeight = document.querySelector('#input-weight');
    var inputHeight = document.querySelector('#input-height');
    var imcResult = document.querySelector('#imc-result');

    var weight = Number(inputWeight.value);
    var height = Number(inputHeight.value);

    var imc = calculateImc(weight, height);
    var formattedImc = imc.toFixed(2).replace('.', ',');

    imcResult.textContent = formattedImc;

}

start();

