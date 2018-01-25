function setup() {
  createCanvas(900, 550);
  //background and sky
  	stroke(0)
  	background(0,140,150,100)
  //sun
  	stroke(255,192,17)
  	fill(255,192,17)
  	ellipse(450,275,300,300)
  	stroke(255,210,17,100)
  	fill(255,210,17,100)
  	ellipse(450,275,390,390)
  	ellipse(450,275,470,470)
  //foreground
  	stroke(151,238,65)
  	fill(151,238,65)
  	rect(0,250,900,300)
  	//foreground rows dark
  	fill(32,186,8)
  	quad(0,550,100,550,345,250,315,250)
  	quad(200,550,300,550,405,250,375,250)
  	quad(400,550,500,550,465,250,435,250)
  	quad(600,550,700,550,525,250,495,250)
  	quad(800,550,900,550,585,250,555,250)
  	quad(1000,550,1100,550,645,250,615,250)
  	quad(1200,550,1300,550,705,250,675,250)
  	quad(1400,550,1500,550,765,250,735,250)
  	quad(1600,550,1700,550,825,250,795,250)
  	//lake
  	stroke(49,122,232,150)
  	fill(49,122,232,150)
  	ellipse(0,325,450,130)
  	fill(49,122,232)
  	ellipse(0,325,400,100)
  	//grass
  	stroke(110,56,33)
  	fill(110,56,33)
  	triangle(745,550,775,550,760,440)
  	fill(99,135,14)
  	stroke(99,135,14)
  	ellipse(760,440,130,130)
  	ellipse(760,350,115,115)
  	ellipse(760,270,100,100)


 

  	
	

}