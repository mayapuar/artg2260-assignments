var  xPos;// declare variables xPos and yPos
var yPos;
var  xSpeed;
var  ySpeed;
var img;
var imgw = (40); 
var imgh = (30);

// declare a var called xSpeed;
// declare a var called ySpeed
// declare a variable called img 
// declare a var for image width, assign 40 
// declare a var for image height, assign 30
function preload(){
  img = loadImage('assets/image1.png');
}
// use the preload()function to load an image, 
// format: img = loadmage('assets/imageName.png');
// you'll need to create a folder called assets, and include the png there

function setup() {
	createCanvas (400, 400); 
	// create a canvas at least 400 x 400
	xPos = width/2;
	// set xPos to be half of the width 
	yPos = height/2;
	// set yPos to be half of the height

	xSpeed = random(1, 30);
	ySpeed = random(1, 30);

	// assign xSpeed and ySpeed 
	// with random values between 1 and 10
}

function draw(){
	background(0);                 // set the background to black

	image(img, xPos, yPos, width, height);// draw the image at the (xPos, yPos) coordinate,
	// using the template image(img, xPos, yPos, width, height)

	//xSpeed +=xPos
	// add the xSpeed to xPos
	//ySpeed += yPos
	// add the ySpeed to yPos

	// if we reach the edge of the canvas
	// turn around (toggle xSpeed negative to positive)

	// same as above, toggle ySpeed if we hit the top or bottom
}