
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinBase, floor;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	dustbinBase = new Dustbin(600,485);
	paperball = new Paper(100,200,25);
	floor = new Ground;

	Engine.run(engine);
	
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);

  
  dustbinBase.display();
  paperball.display();
  floor.display();

  keyPressed();
 
}

function keyPressed()
{
	if (keyCode === UP_ARROW)
	{
		xVal = 0.5;
		yVal = -2;

		Matter.Body.applyForce(paperball.body,paperball.body.position,{x:xVal,y:yVal});

		if(paperball.body.position.x>300)
		{
			//Matter.Body.applyForce(paperball.body,paperball.body.position,{x:-0.5,y:2});
			xVal = xVal*-1;
			yVal = yVal*-1;
			Matter.Body.applyForce(paperball.body,paperball.body.position,{x:xVal,y:yVal});
		}

		

	}
}

