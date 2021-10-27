var retFixo, retMovel;
var objeto1,objeto2,objeto3,objeto4;

function setup() {
  createCanvas(800,400);
  retFixo = createSprite(200,200,50,80);
  retFixo.shapeColor = "green";
  retFixo.debug = true;
  retMovel = createSprite(400,800,80,30);
  retMovel.shapeColor = "green";
  retMovel.debug = true;

  objeto1 = createSprite(100,100,50,50);
  objeto1.shapeColor = "green";
  objeto2 = createSprite(200,100,50,50);
  objeto2.shapeColor = "green";
  objeto3 = createSprite(300,100,50,50);
  objeto3.shapeColor = "green";
  objeto4 = createSprite(400,100,50,50);
  objeto4.shapeColor = "green";
}

function draw() {
  background(255,255,255);

  retMovel.x = World.mouseX;
  retMovel.y = World.mouseY;

  if(isTouching(retMovel,objeto1)){
    retMovel.shapeColor = "blue";
    objeto1.shapeColor = "blue";
  }
  else{
    retMovel.shapeColor = "green";
    objeto1.shapeColor = "green";
  }
  
  drawSprites();
}

function isTouching(obj1,obj2){
  if(obj1.x - obj2.x < obj2.width/2 + obj1.width/2 
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2
    && obj1.y - obj2.y < obj2.height/2 + obj1.height/2 
    && obj2.y - obj1.y < obj2.height/2 + obj1.height/2){
    
      return true;
  }
  else{
      return false;
  }
}
