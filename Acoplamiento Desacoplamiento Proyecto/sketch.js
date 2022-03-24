var sleep, bg, gym, move, eat, bath, brush;
var astronout;


function preload() {
  bg = loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym = loadAnimation("images/gym1.png","images/gym1.png","images/gym2.png","images/gym2.png");
  eat = loadAnimation("images/eat1.png","images/eat1.png","images/eat1.png","images/eat2.png","images/eat2.png","images/eat2.png");
  bath = loadAnimation("images/bath1.png","images/bath1.png","images/bath1.png","images/bath2.png","images/bath2.png","images/bath2.png"); 
  move = loadAnimation("images/move.png","images/move.png","images/move1.png","images/move1.png");
  
}
function setup() {
  createCanvas(800,400);
  astronout = createSprite(300, 230);
  astronout.addAnimation("sleeping",sleep);
  astronout.scale = 0.1;
}

function draw() {
  background(bg);  
  drawSprites();
  
  textSize(23);
  fill("white");
  text("Instrucciones:",10,30);
  textSize(15);
  text("Flecha arriba = Cepillarse",10,50);
  text("Flecha abajo = Ejercitarse",10,70);
  text("Flecha izquierda = Comer",10,90);
  text("Flecha derecha = Bañarse",10,110);
  text("Tecla m = Moverse",10,130);

  edges=createEdgeSprites(); 
  astronout.bounceOff(edges);

  if(keyDown("UP_ARROW")){
    astronout.addAnimation("cepillarse",brush);
    astronout.changeAnimation("cepillarse");
    astronout.y = 260;
    astronout.velocityX = 0;
    astronout.velocityY = 0;
  }

  if(keyDown("DOWN_ARROW")){
    astronout.addAnimation("gyming",gym);
    astronout.changeAnimation("gyming");
    astronout.y = 260;
    astronout.velocityX = 0;
    astronout.velocityY = 0;
  }

  if(keyDown("LEFT_ARROW")){
    astronout.addAnimation("comer",eat);
    astronout.changeAnimation("comer");
    astronout.velocityX = 0;
    astronout.velocityY = 10;
  }

  if(keyDown("RIGHT_ARROW")){
    astronout.addAnimation("bañarse",bath);
    astronout.changeAnimation("bañarse");
    astronout.y = 260;
    astronout.velocityX = 0;
    astronout.velocityY = 0;
  }

  if(keyDown("m")){
    astronout.addAnimation("moverse",move);
    astronout.changeAnimation("moverse");
    astronout.velocityX = 10;
    astronout.velocityY = 2;
  }

}