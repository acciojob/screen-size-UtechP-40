//your JS code here. If required.

// console.log(width,height)
let head = document.createElement("h1");
windows.addEventListner("resize",()=>{
	let width = window.innerWidth;
let height = window.innerHeight;
	head.innerText = `Width:${width} and Height:${height}`;
})

document.querySelector("#sizeInfo").append(head)