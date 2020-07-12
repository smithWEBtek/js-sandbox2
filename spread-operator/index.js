document.addEventListener('DOMContentLoaded', (event) => {
  setBackground();
  answerButton();
  resetButtonText();
  console.log('dominic is here')
})
const mainDiv = document.querySelector('#main')

const setBackground = () => {
  mainDiv.classList.add('background')
}

const answerButton = () => {
  let answerBtn = document.querySelector('button#answer')
  answerBtn.addEventListener('contextmenu', (event) => {
    event.target.innerHTML = "<p class='dark'>You right clicked.</p>"
  })
  answerBtn.addEventListener('click', (event) => {
    event.target.innerHTML = "<p class='dark'>You clicked me.</p>"
  })
  answerBtn.addEventListener('mouseover', (event) => {
    event.target.innerHTML = "<p class='dark'>You hovered.</p>"
  })
}

const resetButtonText = (event) => {
  let mainDiv = document.getElementById('main')
  mainDiv.addEventListener('click', (event) => {
    event.target.innerHTML = ""
  })
}
