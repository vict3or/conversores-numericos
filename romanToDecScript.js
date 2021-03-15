// selector variables and general variables
const inputScreen = document.querySelector('#answer-screen-two')
const inputRoman = document.querySelector('#roman')
var button = document.querySelector('#button-two')
const radioButtonRomanToDecimal = document.querySelector('#romanToDecimal')
const radioButtonDecimalToRoman = document.querySelector('#decimalToRoman')

// functions 
function convertDecToRoman() {
  if (radioButtonDecimalToRoman.checked) {
    let inputScreenValue = Number(inputScreen.value)

    var romanM = [ "", "M", "MM", "MMM" ]
    var romanC = [ "", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM "]
    var romanX = [ "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC" ]
    var romanI = [ "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
          
    var decimalM = romanM[parseInt(inputScreenValue / 1000)]
    var decimalC = romanC[parseInt((inputScreenValue % 1000) / 100)]
    var decimalX =  romanX[parseInt((inputScreenValue % 100) / 10)]
    var decimalI = romanI[inputScreenValue % 10]     
    var concatRomans = (decimalM.trim() + decimalC.trim() + decimalX.trim() + decimalI.trim())
    inputRoman.value = concatRomans
  }
}

function convertRomToDec() {
  if (radioButtonRomanToDecimal.checked) {
    const romanObject = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
    }
    const romanKeysArray = Object.keys(romanObject)

    var toUpper = function (array) {
      return array.toUpperCase();
    }

    var counterForOutPut = 0
    var arrayFromInputValue = Array.from(inputRoman.value).map(toUpper)

    arrayFromInputValue.forEach(function (rom, index) {
      rom = rom.toUpperCase()
      if (romanKeysArray.includes(rom)) {
        counterForOutPut += romanObject[rom]
      }
      if (rom == 'I' && romanKeysArray.includes(arrayFromInputValue[index + 1]) && arrayFromInputValue[index + 1] != 'I') {
        counterForOutPut -= 2
      }
    })
    inputScreen.value = counterForOutPut
  }
}


// function callers
button.addEventListener('click', convertRomToDec)
button.addEventListener('click', convertDecToRoman)





