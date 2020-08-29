var monkey, monkeyImage, bananaImage, jungle, jungleImage


function preload(){

  jungleImage = loadImage("jungle.jpg"); 
  monkeyImage = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  bananaImage = loadImage("banana.png");
}


function setup() {
  createCanvas(800,400);
  trex = createSprite(50,180,20,50);
  jungle.addImage(jungleImage);
  //used when we want continuous background
  jungle.x = jungle.width/2
  
  
  
}

function draw() {
  background(220);
  jungle.velocityX = -5
  if(jungle.x <0){
  jungle.x = jungle.width/2
  }
  
  
  
 drawSprites(); 
}












