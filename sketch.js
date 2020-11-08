const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,ball;
var ground;







function setup() {
  createCanvas(800,400);
  engine=Engine.create();
world=engine.world;
ball=Bodies.circle(450,30,40,{restitution:1});

ground=Bodies.rectangle(400,380,800,30,{isStatic:true});


World.add(world,ball);
World.add(world,ground);
}

function draw() {
  background(0,0,0); 
Engine.update(engine);
rectMode(CENTER);
rect(ground.position.x,ground.position.y,800,30);
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,40,40); 
}