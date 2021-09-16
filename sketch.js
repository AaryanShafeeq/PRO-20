let astronaut;

let bg, sleep, brush, bath, excercise, excercise2, eating;

function preload() {
  bg = loadImage("assets/iss.png");
  sleep = loadAnimation("assets/sleep.png");
  
  brush = loadAnimation("assets/brush.png");
  bath = loadAnimation("assets/bath1.png", "assets/bath2.png");
  
  excercise = loadAnimation("assets/gym1.png", "assets/gym2.png");
  excercise2 = loadAnimation("assets/gym11.png", "assets/gym12.png");

  eating = loadAnimation("assets/eat1.png", "assets/eat2.png");
}

function setup() {
  createCanvas(800, 400);
  
  astronaut = createSprite(300, 230);
  
  astronaut.addAnimation("sleeping", sleep);
  astronaut.addAnimation("brushing", brush);
  astronaut.addAnimation("eating", eating);
  astronaut.addAnimation("bathing", bath);
  astronaut.addAnimation("excercise", excercise);

  astronaut.scale = 0.1;
}

function draw() {
  background(bg);

  if (keyDown(UP_ARROW)) {
    astronaut.changeAnimation("brushing");

    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown(RIGHT_ARROW)) {
    astronaut.changeAnimation("eating");

    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown(LEFT_ARROW)) {
    astronaut.changeAnimation("bathing");

    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown(DOWN_ARROW)) {
    astronaut.changeAnimation("excercise");

    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  drawSprites();

}