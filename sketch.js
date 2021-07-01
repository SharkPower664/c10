var seaImage;
var sea ;
var ship, ship_sailing


function preload(){
ship_sailing = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
seaImage = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);

  sea= createSprite(1000,0,400,400);
  sea.addImage(seaImage);
  sea.scale = 0.5;
  sea.velocityX = -4;
  
 
  ship = createSprite(200,200,10,10)
  ship.addAnimation("sailing", ship_sailing)
  ship.scale = 0.3
  
 
}



function draw() {
  background("white");
  
  if(sea.x<0){
    sea.x = sea.width/5

  }
  drawSprites()
}