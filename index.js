const head = document.getElementById('head')
const body = document.getElementById('body')
const lh = document.getElementById('lh')
const rh = document.getElementById('rh')
const legs = document.getElementById('legs')
let input = document.getElementById('input')
let playerBtn = document.getElementById('playerBtn')
let letter = document.getElementsByClassName('letter')[0]
let word = document.getElementsByClassName('word')

playerBtn.addEventListener('click', checkLetter)

function checkLetter(){
    for (let i = 0; i < word.length; i++) {
        // console.log(word[i].innerText)
        if (word[i].innerText.includes(input.value)){
        word[i].style.display = 'block'
        } else {
            head.style.display = "block"
        }
    }

    console.log(word)
    console.log(input.value)
}