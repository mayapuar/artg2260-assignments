var xPos;
var yPos;
var balls; 
var xSpeed = 1;
var ySpeed = 1; 
var a = 500;
var smalld = 5;
var larged = 50;

function setup(){
	createCanvas(500,500);
	xPos = random (0, width);
	yPos = random (0, height);
	frameRate(30);

}
function draw(){
	//changing color background
	var c = color(frameCount %255, 0, frameCount %255);
	background(c);

	//mapping mouse height to ellipse diameter
	var cirwidth = map(mouseY, 0, height, smalld, larged)

	//ellipse 
	noStroke();
	fill(255);
	ellipse(xPos, yPos, cirwidth, cirwidth);
	xPos += xSpeed;
	yPos -= ySpeed;

	if (xPos >= width || xPos <= 0){
		xSpeed = -xSpeed;
	}
	if (yPos >= height || yPos <= 0){
		ySpeed = -ySpeed;
	}


}