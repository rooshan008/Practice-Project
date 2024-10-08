const inputBox = document.querySelector('#input-box')
const buttons = document.querySelectorAll('button')

// initialize the variables to store the value
let string = ''

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML === '=') {
      string = eval(string)
      inputBox.value = string
    } else if (e.target.innerHTML === 'AC') {
      string = ''
      inputBox.value = string
    } else if (e.target.innerHTML === 'DEL') {
      if (typeof(string) === 'number') {
        string = string.toString()
        string.substring(0, string.length - 1)
      }
        string = string.substring(0, string.length - 1)
        inputBox.value = string
    } else {
      string += e.target.innerHTML
      inputBox.value = string
    }
  })
})
