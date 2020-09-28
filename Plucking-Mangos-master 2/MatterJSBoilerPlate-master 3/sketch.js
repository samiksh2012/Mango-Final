
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var boy;
var boyImg;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
	tree = new TreeClass(500, 500, 400, 400);
	stone = new Stone(200,300);
  boy = new Boy(stone.body,{x:200, y:50}, 200, 200, 250, 250);
  mango1 = new Mango(200, 500);
  mango2 = new Mango(300, 500)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  tree.display();
  ground.display();
  boy.display();
  stone.display();
  mango1.display();
  mango2.display();
 
  drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
   boy.fly();
    
}





