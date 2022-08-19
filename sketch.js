var sea,ship;

var seaImg, shipImg;

function preload(){
 
    shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png");
   seaImg = loadImage("sea.png")
  
  }
  
 

function setup(){
  createCanvas(400,400);
    sea = createSprite(400,200);
    sea.addImage(seaImg);
    sea.velocityX = -5;
    sea.scale=0.3;
    //crea sprites del ship
    ship = createSprite (130,200,30,30);
    ship.addAnimation("running",shipImg);
    ship.scale= 0.3;
  
    
}

function draw() {
  background("blue");
 
if (sea.x <0){
sea.x=sea.whidth/2;

}

sea.velocityX = -3;
  

drawSprites();

}