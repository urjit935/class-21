var FR, MR;
var box1, box2, box3, box4;

function setup() {

  createCanvas(800,600);

  FR = createSprite(500, 400, 50, 80);
  FR.shapeColor = "green";
  MR = createSprite(400, 200, 80, 30);
  MR.shapeColor = "green";
  box1 = createSprite(100,400,50,50);
  box1.shapeColor = "green";
  box1.velocityX = 3;
  box2 = createSprite(200,100,50,50);
  box2.shapeColor = "green";
  box3 = createSprite(300,100,50,50);
  box3.shapeColor = "green";
  box4 = createSprite(400,100,50,50);
  box4.shapeColor = "green";


}

function draw() {
  background(255,255,255);  

  MR.x = World.mouseX;
  MR.y = World.mouseY;

  //change color of MR and box1
  if(isTouching(MR, box2)){

    box2.shapeColor = "red";
    MR.shapeColor = "red";
  }
  else{
    box2.shapeColor = "green";
    MR.shapeColor = "green";
  }
  
  bounceOff(box1,FR);

  //console.log(MR.x - FR.x);
  console.log(MR.width/2 + FR.width/2);
  console.log(FR.x - MR.x)

  drawSprites();
}

function isTouching(m, b){

  if( (m.x - b.x < m.width/2 + b.width/2) && 
    (b.x - m.x < m.width/2 + b.width/2) && 
    (m.y - b.y < m.height/2 + b.height/2) && 
    (b.y - m.y < m.height/2 + b.height/2)){
      return true;
    
  }
  else{
    return false;
  }
}

function bounceOff(box,b){

 if ((box.x - b.x < box.width/2 + b.width/2) && 
  (b.x - box.x < box.width/2 + b.width/2)){

    box.velocityX = box.velocityX * (-1);

}

}