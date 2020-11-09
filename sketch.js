const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, ground;

function setup() {

  engine = Engine.create()
  world = engine.world;

  createCanvas(800,400);
   box1 = new Box(200,200,40,80);
   box2 = new Box(200,200,40,80);
   ground = new Ground(400,390,800,25)
}

function draw() {
  background(0);  
  Engine.update(engine);
  box1.display();
  box2.display();
  ground.display();
  drawSprites();
}