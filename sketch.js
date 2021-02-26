
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
const Render=Matter.Render;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var ropeObject1, ropeObject2, ropeObject3, ropeObject4, ropeObject5;    
var roofObject1, roofObject2, roofObject3, roofObject4, roofObject5; 
var world;

function setup() {
	createCanvas(800, 700);
	background(255);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roofObject= new roof(width/2, height/4, width/2, 20);

	bobDiameter=40;

	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
      
	bobObject1=new bob(startBobPositionX-bobDiameter*2, startBobPositionY, bobDiameter);
	bobObject2=new bob(startBobPositionX-bobDiameter*2, startBobPositionY, bobDiameter);
	bobObject3=new bob(startBobPositionX-bobDiameter*2, startBobPositionY, bobDiameter);
	bobObject4=new bob(startBobPositionX-bobDiameter*2, startBobPositionY, bobDiameter);
	bobObject5=new bob(startBobPositionX-bobDiameter*2, startBobPositionY, bobDiameter);

	var render=Render.create({
		element: document.body,
		engine: engine,
		options:{
			width: 1200,
			height: 700,
			wireframes: false
		}
	});

	ropeObject1= new rope(bobObject1.body,roofObject.body, -bobDiameter*2,0);
	ropeObject2= new rope(bobObject2.body,roofObject.body, -bobDiameter*2,0);
	ropeObject3= new rope(bobObject3.body,roofObject.body, -bobDiameter*2,0);
	ropeObject4= new rope(bobObject4.body,roofObject.body, -bobDiameter*2,0);
	ropeObject5= new rope(bobObject5.body,roofObject.body, -bobDiameter*2,0);
	//ropeObject6= new rope(bobObject6.body,roofObject.body, -bobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bobObject1.display();
  bobObject2.display();
  roofObject.display();

  bobObject3.display();
  bobObject4.display();

  bobObject5.display();
  
  ropeObject1.display();
  ropeObject2.display();
  ropeObject3.display();
  ropeObject4.display();
  ropeObject5.display();
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){

		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45})
	}
}

function drawLine(constraint)
{
	BobClassBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(BobClassBodyPosition.x, BobClassBodyPosition.y, roofBodyX,roofBodyY);
}

