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
let newAnchorElement = document.createElement("a");
newAnchorElement.innerText = "MDN DOM Material";
newAnchorElement.href = "https://developer.mozilla.org/en-US/docs/Glossary/DOM";

// 2. Get access to the parent element that should hold the new element
let firstParagraph = document.querySelector("p");

// 3. Insert the new element into the parent element content
firstParagraph.append(newAnchorElement);

// REMOVE ELEMENTS
// 1. Select the element that should be removed
let firstH1Element = document.querySelector("h1");

// 2. Remove it!
firstH1Element.remove();
// For Older Browsers:
// firstH1Element.parentElement.removeChild(firstH1Element);

// MOVE ELEMENTS
// 1. Select the element that should be moved
// Done Above:
// let firstParagraph = document.querySelector("p");
// 2. Insert in new location (browser will automatically delete old)
firstParagraph.parentElement.append(firstParagraph);
