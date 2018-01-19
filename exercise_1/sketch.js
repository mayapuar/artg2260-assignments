function setup() {
  createCanvas(600, 600);
  	stroke(0)
  	//rectangle
  	fill(200, 0, 0, 100)
	rect(50, 150, 150, 50);  
	//traingle
	fill(150)
	triangle(50, 250, 200, 275, 50, 300);
	// cirlce
	fill(100,100,200)
	ellipse(125, 375, 50, 50);
	//curve shape
	fill(0,200,100,100)
	bezier(100, 500, 300, 500, 300, 580, 100, 580);
	//line
	line(100, 500, 100, 580);

}
