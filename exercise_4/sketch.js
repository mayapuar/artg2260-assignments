let r;

function setup() {
	createCanvas(500, 500);
	r = new Box();
}

function draw(){
	background (0);
	r.display();
	r.move();
	r.teleport();
}

class Box {
	constructor(){
		this.y = 200;
		this.x = 200;
		this.ySpeed = 1;
	}
	display(){
		this.rcolor;
		this.bcolor;
		this.gcolor;
		fill(this.rcolor, this.gcolor, this.bcolor);
		rect(this.x, this.y, 50, 50);
	}
	move(){
		this.y += this.ySpeed;

	}
	teleport(){
		if (this.y <= 0 || this.y+50 >= height){
			this.ySpeed*= -1;
			this.rcolor = random(255);
			this.gcolor = random(255);
			this.bcolor = random(255);
		}
	}

}