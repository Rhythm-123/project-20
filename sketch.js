var speed,car,wall,weight
function setup() {
  createCanvas(800,400);
  speed=random(55,90)
  weight=random(400,1500)
  car=createSprite(50,200,50,50)
  car.velocityX=speed
  //car.shapeColor="green"
  wall=createSprite(600,200,60,160)
  wall.shapeColor="red"
}

function draw() {
  background(0);  
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0
    var d=0.5*weight*speed*speed/22500
    if(d>180){
      car.shapeColor="blue"

    }
    if(d<180 && d>100 ){
      car.shapeColor="brown"

    }
    if(d<100){
      car.shapeColor="green"

    }
  }
  drawSprites();
}