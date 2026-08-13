// JavaScript Comments

// console.log(document);

// console.dir(document);

// document.body.children[1].children[1].children[0].href =
//   "https://www.google.com/";

// document.body.children[1].firstElementChild;

let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://www.google.com/";

anchorElement = document.querySelector("#external-link");
anchorElement.href = "https://www.readingfc.co.uk/";

// ADD AN ELEMENT
// 1. Create the new element
// 2. Get access to the parent element that should hold the new element
// 3. Insert the new element into the parent element content
