// Prompt sync module introduced to take input
const prompt = require("prompt-sync")();

// Some Booleans Declared to function as an "On/off" button
let gameRunning = true
let playerWon = false
let monsterWon = false

// Two Objects are created and given properties
let player = {
  name: "",
  attack: 15,
  heal: 10,
  health: 100
}

let monster = {
  name: "Dragon",
  attack: 20,
  health: 100
}
// Game Intro, Creating a player
console.log("!!! Welcome to MATH MONSTER !!!")
player.name = prompt("To begin, Enter player name: ")
console.log("----------------------")
console.log(`${player.name} has ${player.health}% health!`)
console.log(`${monster.name} has ${monster.health}% health!`)
console.log("----------------------")
// While loop used to continuously loop through the different Selections
while (gameRunning = true) {
// Function Created to "Make a Choice" *Easy to call multiple times and saves time*
  function makeChoice() {
    console.log("a) Attack")
    console.log("b) Heal")
    console.log("c) Exit Game")
  }

// Call to Action *User needs 
  makeChoice()
  let choice = prompt(`Hello ${player.name}, please select an action: `)

// Conditionals Begin! Lots and Lots of Conditionals/Nested Conditionals
  if (choice == "a") {
    let firstNumber = Math.floor(Math.random() * 10) + 1
    let secondNumber = Math.floor(Math.random() * 10) + 1
    let result = firstNumber + secondNumber
    let answer = prompt(`${firstNumber} + ${secondNumber} = `)
      if (result == answer) {
        monster.health = monster.health - player.attack
        console.log("You're Right!")
        console.log(`${monster.name} has ${monster.health}% health left!`)    
      } else {
        player.health = player.health - monster.attack
        console.log("You're Wrong!")
        console.log(`${player.name} has ${player.health}% health left!`)
      }
  } else if (choice == "b" && player.health != 100) {
      firstNumber = Math.floor(Math.random() * 999) + 100
      secondNumber = Math.floor(Math.random() * 999) + 100
      result = firstNumber + secondNumber
      answer = prompt(`${firstNumber} + ${secondNumber} = `)
        if (result == answer) {
          player.health = player.health + player.heal
          console.log("You're Right!")
          console.log(`You gained ${player.heal} health points!`)
          console.log(`Your health is now at ${player.health}% !`)
        }
  } else if (choice == "b" && player.health >= 100) {
      console.log("You already have MAX health! Choose a different action")
  } else if (choice == "c") {
    gameRunning = false
    console.log("Thanks for Playing!")
    break
//This line is used for Input Validation
  } else {
    console.log("Please Enter a Valid Input!")
  } 
// Determines When/How the Game Will End *Unless User Enters "c"
  if (player.health <= 0) {
    monsterWon = true
    console.log("You Lost!")
    break
  }
  if (monster.health <= 0) {
    playerWon = true
    console.log("You won!")
    break
  }

}
