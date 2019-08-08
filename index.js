const prompts = require('prompts');


// devcamp casino game

let wallet
const theOdds = 75
const multiplier = 2

function randomNumber () {
  return (Math.random() * 100).toFixed(0)
}

function welcomeAndPlaySlot () {
prompts({
    type: 'text',
    name: 'value',
    message: 'Are you hear to play slots?',
    validate: (answer) => answer === 'no' ? `Sorry, we only have slots.` : true
  })
  .then((response) => {
    if (response.value === 'yes' ) {
      getBalanceBeforeYouPlay()
         }
      })
      .catch(err => console.log(err))
}

function playSlots () {
    prompts({
      type: 'text',
      name: 'value',
      message: 'Would you like to pull the lever to the slot machine?',
      validate: answer => answer === 'no' ? 'why not?' : true
    }).then(() => {
      const number = randomNumber()
      if (number > theOdds) {
        wallet = wallet + 5
        console.log('Congrats, you won $5.00',`now you have ${wallet}`)
        playAgain()
      } else {
        wallet = wallet - 5
        console.log('crap.. you lost $5 dollars', `now you have ${wallet - 5}`)
        playAgain()
      }
    })


}

function playAgain () {
  prompts({
    type: 'text',
    name: 'value',
    message: 'Would you like play again?'
  }).then((answer) => {
    if (answer.value === 'yes') {
      playSlots()
    } else {
      console.log('Sorry, come again')
    }
  })
}

function getBalanceBeforeYouPlay () {
  prompts({
    type: 'number',
    name: 'value',
    message: 'How much money would you like to add to your wallet?',
    validate: number => number < 10 ? 'Stop being cheap, $ 10.00 minumum' : true
  }).then(result => {
    wallet = result.value
    console.log(`Your wallet now has $${wallet} dollars`)
    playSlots()
  })
}

welcomeAndPlaySlot()
