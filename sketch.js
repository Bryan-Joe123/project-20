var wall, car;
var speed, weight, deformation;

function setup() {
  createCanvas(1600,400);

  car=createSprite(50,height/2,100,50);
  speed = Math.round(random(55,99));
  weight = Math.round(random(400,1500));
  car.velocityX=speed;

  wall=createSprite(1500, height/2, 60, height/2);
}

function draw() {
  background("black");  
  drawSprites();
  if(collideWith(car,wall)){
    car.velocityX=0;
    deformation=(0.5*weight*speed*speed)/22500;
    setColor(deformation,car);
  }
}

function collideWith(sprite,collideWith){
  if(-sprite.x+collideWith.x < sprite.width/2+collideWith.width/2){
    return true;
  }
}

function setColor(x,sprite){
  if(x>180){
    sprite.shapeColor=color(255,0,0);
  }else if(x<=180 && x>=100){
    sprite.shapeColor=color(230,230,0);
  }else{
    sprite.shapeColor=color(0,255,0);
  }
}