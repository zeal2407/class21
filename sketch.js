var fixedRect, movingRect;
var stopRect, goRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  stopRect = createSprite(200,100,60,20);
  stopRect.shapeColor="blue";
  goRect = createSprite(800,300,20,60);
  goRect.shapeColor="blue";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,goRect)){

    movingRect.shapeColor = "red";
    goRect.shapeColor = "red";
  }
 
  else if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
else{
  movingRect.shapeColor = "green";
  goRect.shapeColor = "blue";
  fixedRect.shapeColor= "green";
  
}
drawSprites();
}

