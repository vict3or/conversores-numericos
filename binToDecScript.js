// selector variables and general variables
const binarys = document.querySelector('#binary')
var button = document.querySelector('#button-one')
const answerScreen = document.querySelector('#answer-screen-one')
const radioButtonDecimalToBinary = document.querySelector('#decimalToBinary')
const radioButtonBinaryToDecimal = document.querySelector('#binaryToDecimal')

// functions 

function convertDecToBin() {
  if (radioButtonDecimalToBinary.checked) {
    let answerScreenValue = parseInt(answerScreen.value)
    binarys.value = answerScreenValue.toString(2)
  }
}

function convertBinToDec() {
  if (radioButtonBinaryToDecimal.checked) {
    let reversedArray = []
    function revert() {
      Array.from(binarys.value).forEach(function (binary) {
        reversedArray.unshift(binary)
      })
    }
    revert(reversedArray)
    let sumCount = 0

    reversedArray.forEach(function (item, index) {
      sumCount += Number(item) * Math.pow(2, index)
    })

    answerScreen.value = sumCount
    sumCount = 0
  }

}

// function callers

button.addEventListener('click', convertBinToDec)
button.addEventListener('click', convertDecToBin)




