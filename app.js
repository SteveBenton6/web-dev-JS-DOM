// JavaScript Comments

let paragraphElement = document.querySelector("p");

function changeParagraphText() {
  paragraphElement.innerText = "Clicked!";
}

paragraphElement.addEventListener("click", changeParagraphText);
