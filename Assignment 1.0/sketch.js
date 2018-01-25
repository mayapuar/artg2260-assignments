function setup() {
  createCanvas(600, 600);
	stroke(0)
	//head
	stroke(0)
	fill(255)
	ellipse(150, 100, 70, 70)
	//eyes
	fill(0)
	ellipse(137, 97, 7, 7)
	fill(0)
	ellipse(163, 97, 7, 7)
	//mouth
	bezier(135,113,137,131,163,131,165,113)
	//body
	stroke(0)
	line(150,135,150,280)
	//left arm
	line(150,190,110,180)
	line(110,180,90,145)
	//left hand
	fill(255)
	ellipse(89,142,10,10)
	//left hand fingers
	line(84,144,78,144)
	line(84,140,78,138)
	line(87,136,83,132)
	line(91,137,92,131)
	//right arm
	line(150,190,210,210)
	line(210,210,170,230)
	//right hand
	ellipse(165,233,10,10)
	//right hand fingers
	line(160,231,155,228)
	line(160,234,154,237)
	line(163,238,160,243)
	line(167,237,169,242)
	//left leg
	line(150,280,100,350)
	//right leg
	line(150,280,200,350)
	//left foot
	line(100,350,85,345)
	//right foot
	line(200,350,215,345)
}

