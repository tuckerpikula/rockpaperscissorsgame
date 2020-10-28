let wins = 0;
let loss = 0;
let tie = 0;

let npc = ['rock', 'paper', 'scissors'];

for (let i = 0; i < 10; i++) {
  let computerGuess = npc[Math.floor(Math.random() * npc.length)]
  console.log(computerGuess)

  let answer1 = prompt('Choose rock, paper, or scissors to play')

  if (answer1 === computerGuess) {
    tie++
  } else if ((answer1 === 'rock' && computerGuess === 'scissors') || (answer1 === 'paper' && computerGuess === 'rock') || (answer1 === 'scissor' && computerGuess === 'paper')) {
    wins++
    alert('You won! Score =' + wins)
  } else {
    loss++
    alert('You lost=' + loss)
  }
}

console.log('Ties =' + tie)
console.log('Win = ' + wins)
console.log('Loss =' + loss)