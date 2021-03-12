// selector variables and general variables
var binarys = document.querySelector('#binary')
var button = document.querySelector('#button-one')
var answerScreen = document.querySelector('#answer-screen-one')
var reversedArray = []

// functions 

function convertBinToDec() {
  var reversedArray = []
  function revert() {
    Array.from(binarys.value).forEach(function (binary) {
      reversedArray.unshift(binary)
    })
  }

  revert(reversedArray)
  var sumCount = 0

  reversedArray.forEach(function (item, index) {
    sumCount += Number(item) * Math.pow(2, index)
  })

  answerScreen.value = sumCount
  sumCount = 0
}

// function callers

button.addEventListener('click', convertBinToDec)




