var ball
var ball2
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


let engine;
let world;
var ground
var ground2
function setup()
{
    createCanvas(400,400);
  engine=Engine.create()
  world=engine.world;
  var groundOptions={
    isStatic:true
  }
  ground=Bodies.rectangle(200,385,400,10,groundOptions)
  ground2=Bodies.rectangle(50,200,400,10,groundOptions)
  World.add(world,ground2)
  World.add(world,ground)
  var ballOptions={
    restitution:1.01,
    frictionAir:0.01
  }
  var ballOptions2={
    restitution:1.01,
    frictionAir:0.09
  }
ball=Bodies.circle(200,10,30,ballOptions)
ball2=Bodies.circle(300,10,40,ballOptions2)
World.add(world,ball2)
World.add(world,ball)

}

function draw() 
{
  background(51);
 Engine.update(engine)
 rectMode(CENTER)
 rect(ground.position.x,ground.position.y,400,10)
 rectMode(CENTER)
 rect(ground2.position.x,ground2.position.y,400,10)
 ellipseMode(RADIUS)
 ellipse(ball.position.x,ball.position.y,30)
 ellipseMode(RADIUS)
 ellipse(ball2.position.x,ball2.position.y,40)
 
}

