var balloonImage;
var backgroundImg;
var database;

function preload(){

backgroundImg = loadImage("images/backgroundImg.png");
balloonImage = loadImage("images/balloon.png");

}

function setup() {
  createCanvas(500,500);
database = firebase.database;

  balloon = createSprite(200, 200, 50, 50);
  balloon.addImage(balloonImage);
}


function draw() {
  background(backgroundImg);  
if(keyDown(LEFT_ARROW)){
  balloon.x = balloon.x -10;
}
if(keyDown(RIGHT_ARROW)){
  balloon.x = balloon.x +10;
}
if(keyDown(UP_sARROW)){
  balloon.x = balloon.Y -10;
}
if(keyDown(DOWN_ARROW)){
  balloon.x = balloon.y +10;
}

  drawSprites();
}