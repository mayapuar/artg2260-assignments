let gameState = 0;    // this is the value we'll toggle to change the game states
let score = 0;
let drops = [];
let img0, img1, img2;
let s = second();

function preload(){
  img0 = loadImage("images/raindrop.png");
  img1 = loadImage("images/desert.jpg");
  img2 = loadImage("images/bucket.png");
}
function setup(){
 var cnv = createCanvas(612,403);
 cnv.parent("sketch-canvas");
 imageMode(CENTER);
}

function draw(){
  if (gameState == 0){
    startScreen();
  } else if (gameState == 1){
    update();
  } else if (gameState == 2){
    gameOver();
  }
  for (var i = 0; i<0; i++){ //add time interval
    drops[i] = new drops;
  }
}

function startScreen(){
  background(255);
  text("Click to Begin", 10, 30);
  drops = [];
}

function update(){
  image(img1, 0, 0, width, height);
  text("Playing", 10, 30);
  text("Score : " + score, width - 100, 30);
  score++;
  for (let i = 0; i < drops.length; i++){
    drops[i].move();
    drops[i].display();
    drops[i].check();
  }
}

function gameOver(){
  background (255);
  text("Game Over, Click to Reset", 10, 30);
  text("Score : " + score, width - 100, 30);
}

function mouseClicked(){
 if (gameState == 0){
   gameState = 1;
// } else if (gameState == 1){ 
  //want it to end game if drop hits ground
  // gameState = 2;
 } else if (gameState == 2){
   gameState = 0;
 }
}

class drops {
  constructor(tempimg) {
    this.x = random(0, width);
    this.y = 0;
    this.img = tempimg;
    this.dy = 5;
    this.diameter = 25;
  }

  move () {
    this.y = this.y + this.dy;
  }

  display() {
    image(this.img, this.x, this.y, 25, 40);
  }

  check() {
    if(this.y)
    if(this.y >= height) {
      gameState = 2;
    }
  }
}

class bucket {
  constructor(tempimg){
    this.img = tempimg;

  }
}