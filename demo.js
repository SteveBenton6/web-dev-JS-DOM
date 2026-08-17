// JavaScript Comments

let productNameInputElement = document.getElementById("product-name");
let remainingCharsElement = document.getElementById("remaining-chars");

let maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCharacters(event) {
  let enteredText = event.target.value;
  let charsLeft = maxAllowedChars - enteredText.length;
  remainingCharsElement.innerText = charsLeft;
  console.log(charsLeft);
}

productNameInputElement.addEventListener("input", updateRemainingCharacters);
