
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1250, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

    boxPosition=width/2-100
    boxY=410;


    boxleftSprite=createSprite(boxPosition+590, boxY, 20,100);
    boxleftSprite.shapeColor=color("yellow");

    boxLeftBody = Bodies.rectangle(boxPosition+30, boxY, 20,100 , {isStatic:true} );
    World.add(world, boxLeftBody);

    boxBase=createSprite(boxPosition+500, boxY+40, 200,20);
    boxBase.shapeColor=color("yellow");

    boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
    World.add(world, boxBottomBody);

    boxleftSprite=createSprite(boxPosition+410 , boxY, 20,100);
    boxleftSprite.shapeColor=color("yellow");

    boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
    World.add(world, boxRightBody);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



