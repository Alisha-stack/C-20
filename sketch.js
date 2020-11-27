var fixedRect,movingRect


function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 80);
  movingRect=createSprite(400, 400, 80, 30);
  fixedRect.velocityY=2;
  movingRect.velocityY=-2;

  movingRect.shapeColor="blue";
  fixedRect.shapeColor="yellow";
}

function draw() {
  background("black");  
  movingRect.y=World.mouseY;
  movingRect.x=World.mouseX;

  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 
    &&   fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2
    && movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 
    &&   fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2
    )
    
    {
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  else{movingRect.shapeColor="blue";
  fixedRect.shapeColor="yellow";} 
  


  drawSprites();
}