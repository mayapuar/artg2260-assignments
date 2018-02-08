var xPos;
var yPos;
var xSpeed = 1;
var ySpeed = 1; 

function setup(){
	createCanvas(500,500);
	background(0);
	xPos = random(0, height);
	yPos = height;
}
function draw(){
	//fading background
	fill(0,6)
	rect(0, 0, width, height);

	fill(200, 200, 0);
	ellipse(xPos, yPos, 30, 30);
	xPos += xSpeed;
	yPos = yPos - 1;

	if (xPos >= width || xPos <= 0){
		xSpeed = -xSpeed;
	}
	if (yPos >= height || yPos <= 0){
		ySpeed = -ySpeed
	}
	if (yPos < 0) {
		y = height;
	}
}