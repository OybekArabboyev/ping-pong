const image = document.querySelector(".image")
const title = document.querySelector(".title")
const select = document.querySelector(".select")
const player1Title = document.querySelector(".player-one")
const player2Title = document.querySelector(".player-two")
const player1Btn = document.querySelector(".player-one-btn")
const player2Btn = document.querySelector(".player-two-btn")
const resetBtn = document.querySelector(".reset-btn")

let player1Score = 0
let player2Score = 0
let gameFinish = 5
let gameOver = false

function randomImage() {
    let random = Math.trunc(Math.random() * 5 + 1)
    image.src = `images/ping-pong-${random}.jpg`    
}
randomImage()

player1Btn.addEventListener("click", function() {
    if(!gameOver) {
        player1Score++
        player1Title.textContent = player1Score
        if(gameFinish == player1Score) {
            title.textContent = "Player 1 wins!"
            title.style.color = "lightgreen"
            player1Title.style.color = "lightgreen"
            player2Title.style.color = "red"
            gameOver = true
        }
    }
})

player2Btn.addEventListener("click", function() {
    if(!gameOver) {
        player2Score++
        player2Title.textContent = player2Score
        if(gameFinish == player2Score) {
            title.textContent = "Player 2 wins!"
            title.style.color = "lightgreen"
            player2Title.style.color = "lightgreen"
            player1Title.style.color = "red"
            gameOver = !gameOver
        }
    }
})

resetBtn.addEventListener("click", function() {
    title.textContent = "Stol Tennis"
    title.style.color = "#123456"
    player1Title.style.color = "#123456"
    player2Title.style.color = "#123456"

    player1Score = 0
    player2Score = 0
    gameOver = false

    player1Title.textContent = player1Score
    player2Title.textContent = player2Score

    randomImage()
})