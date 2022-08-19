document.getElementById('discount-btn').addEventListener('click', function () {
    const outputValue = document.getElementById('output-value')
    const outputInnerText = outputValue.innerText

    const inputValue = document.getElementById('inputCode').value
    const outputTotal = Number(outputInnerText) - ((Number(outputInnerText) * 30) / 100)
    // outputValue.innerText = outputTotal
    if (inputValue == 'DOM') {
        outputValue.innerText = `${outputTotal} With 30% discount`
    }
})
