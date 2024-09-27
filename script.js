//your JS code here. If required.
let width = window.innerWidth;
let height = window.innerHeight;
// console.log(width,height)
let head = document.createElement("h1");
head.innerText = `Width:${width} and Height:${height}`;

document.querySelector("#sizeInfo").append(head)