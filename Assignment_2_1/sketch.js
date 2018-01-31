var diameter = 10;
var colr = 0;
var colb = 0;
var colg = 0;

function setup (){
	var c = createCanvas(500,500);
	//background
	background(random(255), random(255), random(255), random (255));
	//saveCanvas(c, 'myCanvas', 'jpg');
}

function draw(){
	//line
	noStroke();
	fill(colr, colg, colb);
	if (mouseIsPressed) {
		ellipse(mouseX, mouseY, diameter, diameter);	
	} 
}

function keyPressed () {
	if (key == 'b' || key == 'B') {
		colr = 0; 
		colg = 0;
		colb = 255;
	} else if (key == 'r' || key == 'R') {
		colr =  255;
		colg = 0;
		colb = 0;
	} else if (key == 'y' || key == 'Y') {
		colr = 255;
		colg = 250;
		colb = 0;
	} else if (key == 'g' || key == 'G') {
		colr = 66;
		colg = 216;
		colb = 36;
	} else if (key == 'w' || key == 'W') {
		colr = 255;
		colg = 255;
		colb = 255;
	} else if (key == 'h' || key == 'H') {
		colr = 0;
		colg = 0;
		colb = 0;
	} else if (keyCode == UP_ARROW) {
		diameter ++;
	} else if (keyCode == DOWN_ARROW) {
		diameter/=2;
	}
}

