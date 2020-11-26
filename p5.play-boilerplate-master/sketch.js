var bullet,wall,thiknes;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thiknes=random(22,83)

  bullet=createSprite(50, 200, 50, 50);
  wall=createSprite(1200,203,thiknes,height/2);

  bullet.velocityX=speed
}





function draw() {
  background("black");

 if (hasCollided(bullet,wall)){
bullet.velocityX=0;
var damage =0.5*weight*speed*speed/(thickness*thickness);

if(damage>10){
wall.shapeColor=color(255,0,0);
}
if(damage<10){

wall.shapeColor=color(0,255,0)

}

 }
  


drawSprites();
}


function hasCollided (object1,object2){

bulletRightEdge=object1.x+object1.width;
wallLeftEdge=object2.x;
if (bulletRightEdge>=wallLeft){
  return true
}

return false


}