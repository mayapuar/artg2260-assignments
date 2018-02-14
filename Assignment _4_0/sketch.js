let gameState = 0;    // this is the value we'll toggle to change the game states

let drops = [];
let img0, img1;

function preload(){
  //img0 = loadImage("images/raindrop.png");
  img1 = loadImage("images/desert.jpg");
}
function setup(){
 var cnv = createCanvas(612,403);
 imageMode(CENTER);
}

function draw(){
  background(img1);
  if (gameState == 0){
    startScreen();
  } else if (gameState == 1){
    update();
  } else if (gameState == 2){
    gameOver();
  }
}

class Rain {
  constructor(tempX, tempY, tempimg) {
    this.x = random(0, width);
    this.y = 0;
    this.img = tempimg;
    this.dy = tempY + 5;
    this.diameter = 25;
  }

  move () {
    this.y += this.dy;

    if ((this.y > height)) {
      this.dy = 0;
    }
  }

  display() {
    image(this.img, this.x, this.y, 25, 40);
  }
}

function startScreen(){
  text("Click to Begin", 10, 30);
}

function update(){
  text("Playing", 10, 30);
}

function gameOver(){
  text("Game Over, Click to Reset", 10, 30);
}

function mouseClicked(){
 if (gameState == 0){
   gameState = 1;
 } else if (gameState == 1){
   gameState = 2;
 } else if (gameState == 2){
   gameState = 0;
 }
}