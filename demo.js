// JavaScript Comments

let inputElement = document.querySelector("input");

function readUserInput(event) {
  let enteredText = inputElement.value;
  console.log(`Item Entered in Input: ${enteredText}`);
  console.log(event);
  console.log(event.type); //Event type
  console.log(event.data); //Single Value Entered
  console.log(event.target.value); //Cumulative Value Entered
}

inputElement.addEventListener("input", readUserInput);
