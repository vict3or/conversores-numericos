// selector variables and general variables
var inputScreen = document.querySelector('#answer-screen-two')
var inputRoman = document.querySelector('#roman')
var button = document.querySelector('#button-two')
var romanObject = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000,
}
var romanArray = Object.keys(romanObject)
// functions 
function convertromToDec() {
  var toUpper = function (array) {
    return array.toUpperCase();
  }
  var counterForOutPut = 0
  var arrayFromInputValue = Array.from(inputRoman.value).map(toUpper)
  arrayFromInputValue.forEach(function (rom, index) {
    rom = rom.toUpperCase()
    if (romanArray.includes(rom)) {
      counterForOutPut += romanObject[rom]
    }
    if (rom == 'I' && romanArray.includes(arrayFromInputValue[index + 1]) && arrayFromInputValue[index + 1] != 'I') {
      counterForOutPut -= 2
    }
  })
  inputScreen.value = counterForOutPut
}


// function callers
button.addEventListener('click', convertromToDec)





