
var ground;var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var survivalTime = 0;
var score;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,500);
  ground = createSprite(200,450,1000,20);
  
  monkey = createSprite(54,320,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.15
  
  foodGroup = new Group();
  obstacleGroup = new Group();

}


function draw() {
  background("grey");
  ground.velocityX = -4;

  if(monkey.y >= 150 && keyDown("space")) {
    monkey.velocityY = -12;
  }
    monkey.velocityY= monkey.velocityY  + 1;
  
  if (ground.x < 0){
    ground.x = ground.width/2;
    }
    
  monkey.collide(ground);
  food();
  obstacles();
  drawSprites();
  stroke("black");
  textSize = 20;
  fill("black");
  survivalTime = Math.ceil(frameCount/getFrameRate());
  text("Survival Time: "+survivalTime,200,50);
  
  
}
function food(){
  if (frameCount%80===0){
    banana = createSprite(470,Math.round(random(120,200)),10,10);
  //  banana.velocityX = -8
    banana.addImage(bananaImage);
    banana.scale = 0.1;
        banana.velocityX = -5;
    banana.lifetime =74;
  obstacleGroup.add(banana);
  }
}
function obstacles(){
  if(frameCount%300 ===0){
    obstacle = createSprite(500,420,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -5;
    obstacle.lifetime = 90;
    obstacle.scale = 0.2
  }
}









