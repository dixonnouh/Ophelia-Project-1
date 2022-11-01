console.log('ayo')
let header = document.querySelector('.Ophelia')
let img
let img1
let bg1 = true
function preload() {
	img = loadImage('N01506_9.jpg')
	img1 = loadImage('negative.jpg')
	function windowResized() {
		resizeCanvas(windowWidth, windowHeight)
	}
}

function setup() {
	createCanvas(windowWidth, windowHeight)
}

function draw() {
	background(img)
	changeBackground()
}
//I want to juxtapose the painting against the negative of it, in a jarring way. For now it's with mousePressed, I want it to kind of "flicker" in the future.
function mousePressed() {
	bg1 = !bg1
}

function changeBackground() {
	if (bg1) {
		background(img)
		header.style.color = 'white'
	} else {
		background(img1)
		header.style.color = 'black'
	}
}
