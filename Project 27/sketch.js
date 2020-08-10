
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var roof1
var bob1
var rope1
function preload()
{
	
}

function setup() {
  createCanvas(800, 800);
 
  
  bobdiameter=40;


	engine = Engine.create();
	world = engine.world;
  
	roof1=new Roof(400,200,300,50);
  bob1=new Bob(300,450,20);
  bob2=new Bob(340,450,20);
  bob3=new Bob(380,450,20);
  bob4=new Bob(420,450,20);
  bob5=new Bob(460,450,20);
  rope1=new Rope(bob1.body,roof1.body,-bobdiameter*2,0)
  rope2=new Rope(bob2.body,roof1.body,-bobdiameter*1,0)
  rope3=new Rope(bob3.body,roof1.body,-bobdiameter*0,0)
  rope4=new Rope(bob4.body,roof1.body,bobdiameter*1,0)
  rope5=new Rope(bob5.body,roof1.body,bobdiameter*2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250);
  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed() {
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(bob1,bob1.body.position,{X:85,Y:-85});
  }
  }



