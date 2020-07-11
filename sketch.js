var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

}

function draw() {
  background(0);  
  movingRect.x= World.mouseX;
  movingRect.y = World.mouseY;
   if(isTouching(movingRect, fixedRect)){
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
   }
   else{
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
   }
  

  drawSprites();
}

