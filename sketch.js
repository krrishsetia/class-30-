const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var fruit;
var gameState = "onSling"
function preload(){
  backgroundImg = loadImage("background.png");
 fruit=loadImage("melon.png");
 g=loadImage("basket.png")
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  
 

  //Challenge1:
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);
//challenge 2
  slingShot = new Slingshot(ball, {x:100, y:100});

}
function draw() {
  background(backgroundImg); 
 
  //Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);
  
  ground.display();
  g.scale=.025;


  imageMode(CENTER)
  image(fruit ,ball.position.x,ball.position.y,40,40);
  image(g,450,270)

  slingShot.display();
}
function mouseDragged(){
  if (gameState === "onSling") {
    Matter.Body.setPosition(ball,{x:mouseX,y:mouseY});
  }
}
function mouseReleased(){
  slingShot.fly();
  gameState = "fly"
}
function keyPressed() {
  if (keyCode === 32 ) {
    gameState = "onSling"
    Matter.Body.setPosition(ball, {x:100, y:100})
    slingShot.attach(ball)

  }
}