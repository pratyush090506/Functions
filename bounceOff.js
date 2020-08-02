var fixedRect, movingRect;
var o1,o2,o3,o4;

function setup() {
  createCanvas(800,800);
  fixedRect = createSprite(200, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect= createSprite(200, 200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  o1 = createSprite(100, 80,80,30);
  o1.shapeColor = "green";

  o2=createSprite(200, 80,80,30);
  o2.shapeColor="green";

  o3=createSprite(300, 80,80,30);
  o3.shapeColor="green";


  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
bounceOff(movingRect,fixedRect);
 if(isTouching(movingRect,o1)){

  movingRect.shapeColor="red";
  o1.shapeColor="red";

 }
 else{
  movingRect.shapeColor="green";
  o1.shapeColor="green";

 }
  drawSprites();
}



