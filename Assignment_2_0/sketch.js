var expand = 1;
//var rgb = 1;
function setup(){
	createCanvas(500, 500);
}

function draw(){
	background(255);
	stroke(0, 100, 150);
	strokeWeight(expand);
	noFill();
	for (var x = 0; x <= width; x+= 50){
		for (var y = 0; y <= height; y += 50){
		triangle(x, y, x+10 , y+10 , x+ 10, y+ 10);
		}
	}
}

function keyPressed(){
	if (keyCode == LEFT_ARROW){
		expand = expand*2;
	} else if (keyCode == RIGHT_ARROW){
		expand = expand/2;
	}
}

//function keyPressed(){
	//if (keyCode == UP_ARROW){
	//	rgb = rgb*2;
	//} else if (keyCode == DOWN_ARROW){
	//	rgb = rgb/2;
	//}
//}
