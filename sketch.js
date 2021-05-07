var alien,astronaut,asteroid,bg;
var astronautImg,asteroidImg;





function preload(){

  bg = loadImage("spacebg.jpg");

  alien1 = loadImage("alien.png");
  alien2 = loadImage("alien2.png");
  alien3 = loadImage("alien3.png");

  astronautImg = loadImage("astronaut.png");
  asteroidImg = loadImage("asteroid.png");

}





function setup() {
  createCanvas(displayWidth,displayHeight - 50);

  astronaut = createSprite(displayWidth/2-600,displayHeight/2,20,20)
  astronaut.addImage(astronautImg);
  astronaut.scale = 0.5

  asteroid = createSprite(displayWidth/2+600,displayHeight/2,20,20)
  asteroid.addImage(asteroidImg);
  asteroid.scale = 0.3

  
}

function draw() {
  background(bg);  


  if(keyDown(UP_ARROW)){
    astronaut.y = astronaut.y-5; 
  }

  if(keyDown(DOWN_ARROW)){
    astronaut.y = astronaut.y+5; 
  }



  drawSprites();
}