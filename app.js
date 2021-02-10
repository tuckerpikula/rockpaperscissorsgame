let w = 0
  let l = 0
  let t = 0

  let npc = ['r', 'p', 's']



    for (let i = 0; i < 5; i++) {
    let human = prompt('Choose r, p, or s to play!')
      let npcGuess = npc[Math.floor(Math.random() * npc.length)]
      // console.log(human, npcGuess)
      if (human === npcGuess) {
    t++
        alert('You tie')
      } else if (human === 'r' && npcGuess === 's' ||
        human === 'p' && npcGuess === 'r' ||
        human === 's' && npcGuess === 'p') {
    w++
        alert(`You win: NPC chose: ${npcGuess}`)
      } else {
    l++
        alert(`You lose: NPC chose: ${npcGuess}`)
      } if (i === 4) {
    alert('Wins:' + w + 'Losses:' + l + 'Ties:' + t)
  }
    }

